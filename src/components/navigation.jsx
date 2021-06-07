import React from "react";
import { navLink } from '../data/nav.data';
import { Link } from 'react-router-dom';
import Lang from '../Images/translation.svg';
import SearchBar from "./SearchBar";
import Logo from '../Images/Logo.png';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span>
        <img src={Logo} alt={Logo} />
        Leutrim Olluri
      </span>
      <SearchBar />
      <ul>
          {navLink.map((nav, i) => (
              <li key={i}>
                <Link to={nav.path}>
                  {nav.title}
                </Link>
                  
              </li>
          ))}
          <li>
            <img src={Lang} alt={Lang} />
          </li>
      </ul>
    </nav>
  );
}
