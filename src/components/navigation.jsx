import React from "react";
import { navLink } from '../data/nav.data';
import { Link } from 'react-router-dom';
import Lang from '../Images/translation.svg';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span>Startup Landing Page</span>
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
