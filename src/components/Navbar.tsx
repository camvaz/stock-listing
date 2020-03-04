import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaListUl,FaUser } from 'react-icons/fa';

import "../styles/navbar.scss";

export const Navbar: () => JSX.Element = () => {
    return(
      <div className="menu">
        <Link to="/">
          <div>
            <FaSearch />
          </div>
        </Link>
        <Link to="/">
          <div>
            <FaListUl />
          </div>
        </Link>
        <Link to="/">
            <div>
                <FaUser/>
            </div>
        </Link>
      </div>
    )
}