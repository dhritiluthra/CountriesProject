import React, { useContext, useEffect, useState } from "react";
import "../country.css";
import { Link, useLocation, useParams} from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import CountryDetailShimmer from "./CountryDetailShimmer";


export default function CountryDetail2() {
  // console.log(useParams());
  const location = useLocation();
  const [isDark] = useContext(ThemeContext);
  const { countryName, countryCode } = useParams();
  const [countryData, setcountryData] = useState(null);
  const [msg, setMsg] = useState("Loading...");

  function updateCountryData(data) {
    const nativeName = data.name.nativeName
      ? Object.values(data.name.nativeName)[0].common
      : data.name.common;

    const currency = data.currencies
      ? Object.values(data.currencies)
          .map((obj) => obj.name)
          .join(", ")
      : "";

    const languages = data.languages
      ? Object.values(data.languages).join(", ")
      : "";

    const subregion = data.subregion || "";
    const region = data.region || "";
    const capital = data.capital?.join(", ") || "";
    const population = data.population.toLocaleString() || "";
    const tld = data.tld?.join(", ") || "N/A";

    const flagSvg = data.flags.svg;
    // const bordersStr = data.borders?.join(",");
    let borderCodeArray = data.borders; 

    setcountryData({
      nativeName,
      languages,
      region,
      capital,
      subregion,
      currency,
      population,
      tld,
      flagSvg,
      borders: [],
    });

    // console.log("countryData : ", countryData);
    if (!borderCodeArray) { // Because data.borders can be null
      borderCodeArray = [];
    }
    const promiseArray = borderCodeArray.map((borderCode) => {
      return fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borderCode}&fields=name`
      )
        .then((res) => res.json())
        .then(([borderCntryName]) => {
          return borderCntryName.name.common;
        });
    });
    // console.log(promiseArray);
    Promise.all(promiseArray).then((data) => {
      // console.log(data); // array of border country 
      setcountryData((prevState) => ({
        ...prevState,
        borders: data,
      }));
    });
  }
  useEffect(() => {
    if(location.state){
      data = location.state
      updateCountryData(data);
      console.log("State Data used!");
      return;
    }

    let fetchUrl = "";
    if (countryName) {
      fetchUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    } else if (countryCode) {
      fetchUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    }

    if (!fetchUrl) return;
    //get out of useEffect if fetchUrl is falsy //dont fetch
    //useEffect will re run when countryName,countryCode changes
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((dataFetched) => {
        if (!Array.isArray(dataFetched) || dataFetched.length === 0) { // restcountries API returns array
          setMsg("No such country found");
          return;
        }
        const data = dataFetched[0];
        // console.log("Fetched data:", data);
        updateCountryData(data);
      })
      .catch((error) => {
        console.log(error);
        // setMsg("No such country found") ;
      });
  }, [countryName, countryCode]);
  return (
    <main className={`country-main ${isDark? "dark-mode" : ""}`}>
      <div className="country-details">
        <a className="back-button" onClick={() => history.back()}>
          <i className="material-symbols-outlined">keyboard_backspace</i>
          Back
        </a>
        {/* {!countryData ? <CountryDetailShimmer/> :  */}
        {true ? <CountryDetailShimmer/> : 
        <div className="country-info">
          <img src={countryData.flagSvg} alt={countryName + " flag"} />
          <div className="country-text-con">
            <h1>{countryName}</h1>
            <div className="country-text">
              <div>
                <p>
                  <b>Native Name: </b>
                  {countryData.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {countryData.population}
                </p>
                <p>
                  <b>Region: </b>
                  {countryData.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {countryData.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {countryData.capital}
                </p>
              </div>
              <div>
                <p>
                  <b>Top Level Domain: </b>
                  {countryData.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {countryData.currency}
                </p>
                <p>
                  <b>Language: </b>
                  {countryData.languages}
                </p>
              </div>
            </div>
            <p className="border-cont">
              <b>Border Countries: </b>
              <span className="border-countries">
                {countryData.borders.map((borderCntryName, i) => {
                  return (
                    <Link className="btn" to={`/${borderCntryName}`} key={i}>
                      {borderCntryName}
                    </Link>
                  );
                })}
              </span>
            </p>
          </div>
        </div>}
      </div>
    </main>
  );
}
