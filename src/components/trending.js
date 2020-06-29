import React, { Component } from "react";
import axios from "axios";
import MovieCards from "./MovieCards";

class Trending extends Component {
  state = {
    datas: [],
    param:'trending'
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=f2b57ce39f26dee8ce6bf29486affd98"
      )
      .then((json) => {
        this.setState({
          datas: json.data.results,
        });
      });
  }

  render() {
    return (
      
      <MovieCards datas={this.state.datas} param={this.state.param} />
    
  );
  }
}

export default Trending;
