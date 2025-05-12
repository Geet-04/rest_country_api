import React from 'react'

const Selectmenu = ({setRegion}) => {
  
  return (
    <>
      <select id="region" name="region" className="filter-by-region" onChange={(e) => setRegion(e.target.value.toLowerCase())}>
        <option value="" hidden defaultValue="" >Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  )
}

export default Selectmenu
