import React from "react";
import { navLink } from '../data/nav.data';

export default function Navigation() {
  return (
    <nav className="site-navigatopn">
      <span>Blog2.0</span>
      <ul>
          {navLink.map((nav, i) => (
              <li key={i}>
                  <a href={nav.path}>{nav.title}</a>
              </li>
          ))}
      </ul>
    </nav>
  );
}
