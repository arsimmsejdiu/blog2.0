import React from "react";

const SearchBar = () => {
  return (
    <div className="header">
      <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use href="../Images/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search Article ... "
            className="nav__search-input"
          />
        </form>
    </div>
  );
};

export default SearchBar;
