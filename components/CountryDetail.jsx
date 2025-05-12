import React, { useState, useEffect, useContext } from 'react'
import './CountryDetail.css'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'
import CountryDetailShimmer from './CountryDetailShimmer'
import './CountryDetailShimmer.css'

const CountryDetail = () => {
  const [isDark] = useContext(ThemeContext)
  //console.log(isDark);
  const params = useParams();
  const location = useLocation();

  console.log(location);
  //console.log(params);  
  const countryName = params.country//Use the same name after the colon : in your route path, and access that exact name with params.

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  //console.log(countryData ?.borders);

  useEffect(()=>{
    
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(([data]) =>{
        //console.log(data);
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common || data.name,
          nativeName: Object.values(data.name.nativeName || {})[0]?.common,
          population: data.population.toLocaleString('en-IN'),
          region : data.region,
          subRegion : data.subregion,
          capital: data.capital,
          topLevelDomain : data.tld[0],
          currencies : Object.values(data.currencies || {}).map((currency) => currency.name).join(', '),
          languages: Object.values(data.languages || {}).join(', '),
          borders:[]
        })

        if(!data.borders){
          data.borders = []
        }
        //for multiple fetch use promise.all ->it require an array
        Promise.all(data.borders.map((border)=>{
          return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) =>{
          setCountryData((prevState)=>({...prevState, borders }))
        })
      })
      .catch((err) =>{
        //console.log(err)
        setNotFound(true) //set notfound to true if wrong route given
      })
  },[countryName])

  if(notFound){
    return <div>Country Not Found</div>
  }
  return (
    countryData === null ? 'loading...': 
    <main className={`${!isDark ?'dark':''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick= {() => history.back()}>
            <i className="fa-solid fa-arrow-left-long"></i>&nbsp;&nbsp;Back
        </span>
        {/* <CountryDetailShimmer/> */}
        {countryData === null ? (
          <CountryDetailShimmer/>
        ):(
          <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name}`}/>
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativeName || countryData.name}</span></p>
              <p><b>Population: </b><span className="population">{countryData.population}</span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData.capital ?.join(', ')}</span></p>
              <p><b>top Level Domain : </b><span className="top-level-domain">{ countryData.topLevelDomain}</span></p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
            </div>
            {
              countryData.borders.length != 0 &&
              <div className="border-countries">
                <b>Border Countries:</b>&nbsp;
                {
                  countryData.borders.map((border)=> <Link key={border} to={`/${border}`}>{border}</Link>)
                }
              </div>
            }
          </div>
        </div>
        )}
        
      </div>
    </main>
  )
}

export default CountryDetail
