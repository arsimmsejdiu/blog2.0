import React from "react";
import { navLink } from '../data/nav.data';
import { Link } from 'react-router-dom';

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
      </ul>
    </nav>
  );
}
