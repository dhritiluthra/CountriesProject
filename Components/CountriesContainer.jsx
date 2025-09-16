import React, { useEffect, useState } from "react";
// import countriesData from "../CountriesData";
import CountryCard from "./CountryCard";
import CountryContainerShimmer from "./CountryContainerShimmer";
import { useLocation } from "react-router-dom"; 

export default function CountriesContainer({ searchVal, filterVal }) {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true); // Added to track loading state
  // console.log("------------------------",useLocation());

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,tld,languages,currencies,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCountriesData(data);
        }
        // console.log("Fetched Data:", data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false); // Also stop loading on error
      });

    return () => {
      console.log("Cleaning Up...");
    };
  }, []);

  // console.log("searchVal", searchVal);
  const filteredCountries = countriesData.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchVal.toLowerCase()) &&
      country.region.toLowerCase().includes(filterVal.toLowerCase())
    );
  });

  // console.log(filteredCountries);
  // console.log("countriesData Array ", countriesData);

  const countryCardArr = filteredCountries.map((country, i) => {
    return (
      <CountryCard
        key={i}
        name={country.name.common}
        flagSvg={country.flags.svg}
        population={country.population.toLocaleString()}
        region={country.region}
        capital={country.capital?.[0]}
        countryData={country}
      />
    );
  });

  // console.log(
  //   "contriesData converted into array of React Ele ",
  //   countryCardArr
  // );

  if (loading) {
    return <CountryContainerShimmer />;
  }

  if (countryCardArr.length === 0) {
    return <div>No countries found matching your search.</div>;
  }

  return (
    <>
      <div className="countries-container">
        {/* {console.log(<CountryCard>hi</CountryCard>)} */}
        {countryCardArr}
      </div>
    </>
  );
}
