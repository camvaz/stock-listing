import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import {animate} from "../constants/animations";
import "animate.css";
import "../styles/stock.scss";

export const Stock: (props: any) => JSX.Element = props => {
  const companies = props.location.state.companies;
  const fadeIn = animate("fadeIn fast");
  
  useEffect(() => {
    return () => {};
  });

  return (
    <>
      <div className="def-stock ">
        <img className={animate('fadeInUp fast')} src={companies.profile?.image} alt="stock" />
        <h1 className={animate('fadeInUp fast')}>{companies.symbol}</h1>
        <h2 className={animate('fadeIn')}>{companies.profile?.companyName} - ${companies.profile?.price}</h2>
        <p className={animate('fadeIn')}>
          <b>Description: </b> {companies.profile?.description}
        </p>
      </div>
      <Navbar/>
    </>
  );
};
