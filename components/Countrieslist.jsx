import React, {useState, useEffect} from 'react'
//import countriesData from '../countriesData'
import Countrycard from './Countrycard'
import CountriesListShimmer from './CountriesListShimmer';

const Countrieslist = ({searchTerm, region}) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3')
   .then((res)=> res.json())    // res.json() returns a Promise of the JSON (which is an array of countries)
   .then((data)=>{
      setCountriesData(data)
   });
  },[])

  const filtered = countriesData.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
    const matchesRegion = region === '' || country.region.toLowerCase() === region;
    return matchesSearch && matchesRegion;
  });

  //showing shimmer effect
  // if(true){
  //   return <CountriesListShimmer/>
  // }

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ): (
        <div className='countries-container'>
          {filtered.map((country) => (
              <Countrycard 
                key={country.cca3}
                name={country.name.common} 
                flag={country.flags.svg} 
                population ={country.population} 
                region={country.region} 
                capital={country.capital?.[0]}
                data={country}
              />
      
          ))}
        </div>
      )
      }
    </>
  )
}

export default Countrieslist
