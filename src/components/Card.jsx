import React from "react";

function Card({data}) {
  return (
    <>
    {data.map((value)=>{
     return (
      <div className="card">
        <div className="imgDiv">
          <img src={value.img} alt=""/>
          <h1>{value.name}</h1>
          <p>{value.description}</p>
        </div>
      </div>
     )

    })}
      
    </>
  );
};
export default Card