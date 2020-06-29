import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import MovieCards from "./MovieCards";
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";

class Input extends Component {
  state = {
    datas: [],
    value: "",
    param: "search",
  };
  

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US&query=${this.state.value}&page=1&include_adult=false`
      )
      .then((json) => {
        this.setState({
          datas: json.data.results,
        });
      });
    this.props.history.push("/search");
    
   
    
  };

  render() {
    const { datas } = this.state;
    const movies = datas.length ? (
      <MovieCards datas={this.state.datas} param={this.state.param} />
    ) : (
      <div>No movies match your search terms. Please try again.</div>
    );

    return (
      <div className="input">
        <Icon
          className="icon"
          icon={bxSearch}
          style={{ color: "#eaeaea", fontSize: "30px" }}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search For Movies"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        {movies}
      </div>
    );
  }
}

export default withRouter(Input);
