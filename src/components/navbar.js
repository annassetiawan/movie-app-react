import React, { Component } from "react";
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";
import MovieSearch from './MovieSearch'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="search-bar">
          <Icon
          className='icon'
            icon={bxSearch}
            style={{ color: "#eaeaea", fontSize: "30px" }}
          />
          <MovieSearch/>
        </div>
      </div>
    );
  }
}

export default Navbar;
