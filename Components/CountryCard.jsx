import React from "react";
import { Link } from "react-router-dom";


export default function CountryCard(props) {
  const { name, flagSvg, population, region, capital,countryData } = props;
  return (
    // <Link to={`/CountryDetail?name=${name}`} className="country-card">
    <Link to={`/${name}`} className="country-card" state={countryData}>
      <div className="flag-cont">
        <img src={flagSvg} alt={name} />
      </div>
      
      <div className="card-text">
        <h2 className="card-title">{name}</h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
