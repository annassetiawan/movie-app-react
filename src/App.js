import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import "normalize.css";
import Navbar from "./components/navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Genres from './components/genres';
import Home from './components/home';
import Trending from './components/trending';
import Popular from './components/popular';
import TopRated from './components/toprated';
import MovieDetails from './components/moviedetails'
import GenreList from './components/genreList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Menu />
        <Route exact path='/' component={Home} />
        <Route exact path="/genres" component={Genres} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/toprated" component={TopRated} />
        <Route path='/popular/:id' component={MovieDetails} />
        <Route path='/trending/:id' component={MovieDetails} />
        <Route path='/toprated/:id' component={MovieDetails} />
        <Route exact path='/genres/:id' component={GenreList} />
        <Route exact path='/genres/genrelist/:id' component={MovieDetails} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
