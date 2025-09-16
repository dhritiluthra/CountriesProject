import React from "react";
import "./CountryContainerShimmer.css"
export default function CountryContainerShimmer() {

  //M1
  // const arr = new Array(10).fill(2);
  // console.log(arr);

  //M2
  //array of react elements
  const shimmerCards = Array.from({length: 10}).map((el,i)=>{
    return <div className="country-card shimmer-card" key={i}></div>;
  })

  console.log(shimmerCards);


  return (
    <div className="countries-container">
      {shimmerCards}
    </div>
  );
}
