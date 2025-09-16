import React, { useEffect, useState } from "react";
import "../country.css";
export default function CountryDetail() {
  //getting data from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const countryName = urlParams.get("name") || "Russia";
  const countryCode = urlParams.get("code");

  const [countryData, setcountryData] = useState(null);

  useEffect(() => {
    let fetchUrl = "";
    if (countryName) {
      fetchUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    } else if (countryCode) {
      fetchUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    }

    if (!fetchUrl) return; //get out of useEffect if fetchUrl is falsy //dont fetch
    //useEffect will re run when countryName,countryCode changes
    fetch(fetchUrl)
      .then((res) => res.json())
      .then(([data]) => {
        // restcountries API returns array
        console.log("Fetched data:", data);
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
        const capital = data.capital?.join(', ') || "";
        const population = data.population.toLocaleString() || "";
        const tld = data.tld?.join(", ") || "N/A";

        const flagSvg = data.flags.svg;
        const bordersStr = data.borders?.join(",");

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
          bordersStr
        });

        console.log("countryData : ", countryData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countryName, countryCode]);

  if (!countryData) {
    return <p>Loading...</p>;
  }
  console.log(countryData);
  return (
    <main className="country-main">
      <div className="country-details">
        <a className="back-button" onClick={() => history.back()}>
          <i className="material-symbols-outlined">keyboard_backspace</i>
          Back
        </a>
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
                  {countryData.languages}
                </p>
                <p>
                  <b>Language: </b>
                  {countryData.languages}
                </p>
              </div>
            </div>
            <p>
              <b>Border Countries: </b>
              <a className="btn" href="#">
                India
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
