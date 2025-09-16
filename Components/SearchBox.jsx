import React from 'react'

export default function SearchBox(props) {
  const {setSearchVal} = props;
  return (
    <div className="searchtab">
  <i className="material-symbols-outlined">search</i>
  <input
    onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
    className="searchInput"
    type="text"
    placeholder="Search for a Country.."
  />
</div>

  )
}
