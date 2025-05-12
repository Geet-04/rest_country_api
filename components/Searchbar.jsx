import React from 'react'
import '../App.css'

const Searchbar = ({setSearchTerm}) => {
  return (
   <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input 
        onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())}
        className="search-container-input" type="text" placeholder="Search for a country..."/>
   </div>
  )
}

 export default Searchbar
