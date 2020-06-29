import React, { Component } from "react";
import genres from "../assets/genres.svg";
import home from "../assets/home.svg";
import logo from "../assets/logo.svg";
import toprated from "../assets/toprated.svg";
import trending from "../assets/trending.svg";
import popular from "../assets/popular.svg";
import search from "../assets/search.svg";
import { NavLink,withRouter } from "react-router-dom";


class Menu extends Component {
  render() {
    
    const {location} = this.props;

  if(location.pathname.startsWith('/popular/') || location.pathname.startsWith('/trending/') || location.pathname.startsWith('/toprated/') || location.pathname.startsWith('/genrelist/') || location.pathname.startsWith('/search/')) {
    return null;
  } else {
    return (
      <div className="container">
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu-container">
          <p className="menu-title">Discover </p>
          <hr />
          <div className="menu1">
            <ul>
              <li>
                <NavLink className="menu-link" exact to="/">
                  <img className='home' src={home} alt="home" />
                  <p className="menu-text">Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-link" to="/genres">
                  <img className='genre' src={genres} alt="genre" />
                  <p className="menu-text">Genres</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-link" to="/toprated">
                  <img className='toprated' src={toprated} alt="top rated" />
                  <p className="menu-text">Top Rated</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-link" to="/trending">
                  <img className='trending' src={trending} alt="trending" />
                  <p className="menu-text">Trending</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-link" exact to="/popular">
                  <img className='popular' src={popular} alt="popular" />
                  <p className="menu-text">Popular</p>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-link" exact to="/search">
                  <img className='search' src={search} alt="search" />
                  <p className="menu-text">Search</p>
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    );// your existing render login
  }

    
  }
}




export default withRouter(Menu);
