import React from "react";
import "./CountryContainerShimmer.css";
import useTheme from "../hooks/useTheme";


export default function CountryDetailShimmer() {
  const [isDark] = useTheme();
  return (
    <div className="country-info">
      <div className="shimmer-card2 img-cont-shimmer"></div>
      <div className="country-text-con">
        <h1>{}</h1>
        <div className="country-text">
          <div>
            <p className="pshimmer">
              <div className="pinsider"></div>
            </p>
            <p className="pshimmer"><div className="pinsider"></div></p>
            <p className="pshimmer"><div className="pinsider"></div></p>
            <p className="pshimmer"><div className="pinsider"></div></p>
            <p className="pshimmer"><div className="pinsider"></div></p>
          </div>
          <div>
            <p className="pshimmer"><div className="pinsider"></div></p>
            <p className="pshimmer"><div className="pinsider"></div></p>
            <p className="pshimmer"><div className="pinsider"></div></p>
          </div>
        </div>
        <p className="border-cont pshimmer">
          <b></b>
          <span className="border-countries"></span>
        </p>
      </div>
    </div>
  );
}
