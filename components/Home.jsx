import React, {useContext, useState} from 'react'
import Searchbar from "./Searchbar";
import Selectmenu from "./Selectmenu";
import Countrieslist from "./Countrieslist";
import ThemeContext from '../contexts/ThemeContext';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  //const [query, setQuery] = useState('');
  console.log("SearchTerm:", searchTerm);
  console.log("Region:", region);

  const [isDark] = useContext(ThemeContext);
  //console.log("Query is:", query);
  return (
   <main className = {`${!isDark ? 'dark':''}`}>
      <div className="search-filter-container">
         <Searchbar setSearchTerm={setSearchTerm} />
         <Selectmenu setRegion={setRegion}/>
      </div>
   
   <Countrieslist searchTerm={searchTerm} region={region} />

   </main>
  )
}

export default Home
