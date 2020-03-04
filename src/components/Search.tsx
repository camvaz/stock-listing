import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../App.scss";
import "animate.css";

export interface IPSearch{

}

export const Search: (props:any) => JSX.Element = (props) => {
  const [search, setSearch] = useState("");

  const handleChange: (event: any) => void = event => {
    setSearch(event.target.value);
  };

  useEffect(()=>{
    return(()=>{

    })
  })

  return (
    <div className="app">
      <h1 className='title animated fadeIn'>Stock listing</h1>
      <input
        type="text"
        className="animated slideInDown"
        onChange={handleChange}
      />
      <div className="grid">
        {props.companies?.companyProfiles.map(
          (i: any, index: number) =>
            i.profile?.companyName
              .toLowerCase()
              .includes(search.toLowerCase()) && (
              <div className="card animated fadeIn" key={index}>
                <Link to={{pathname: '/stock', state:{companies:i}}}>
                  <p>{`$${i.profile?.price}`}</p>
                  <img src={i.profile?.image} alt="" />
                  <p>{i.symbol}</p>
                </Link>
              </div>
            )
        )}
      </div>
      <Navbar/>
    </div>
  );
};
