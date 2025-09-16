import React from 'react'

export default function FilterBox({setfilterVal} ) {
  return (
    <div className="regionFilter">
  <select id="filterSelect" onChange={(e)=>{
    setfilterVal(e.target.value.toLowerCase())
  }}>
    <option value="" hidden>
      Filter By region
    </option>
    <option value="">All</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="americas">Americas</option>
    <option value="africa">Africa</option>
    <option value="oceania">Oceania</option>
  </select>
</div>

  )
}
