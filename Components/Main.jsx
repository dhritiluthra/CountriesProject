import React, { useContext, useState } from "react";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import CountriesContainer from "./CountriesContainer";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export default function Main() {
  const [isDark] = useContext(ThemeContext);
  const [searchVal, setSearchVal] = useState('');
  const [filterVal, setfilterVal] = useState('');
  return (
    <main className={`${isDark? "dark-mode" : ""}`}>
      <div className="searchbar">
        <SearchBox setSearchVal={setSearchVal}/>
        <FilterBox setfilterVal={setfilterVal} />
      </div>
      <CountriesContainer searchVal={searchVal} filterVal={filterVal}/>
    </main>
  );
}
