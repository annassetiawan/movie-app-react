import React, { Component } from "react";
import axios from "axios";
import MovieCards from "./MovieCards";

class GenreList extends Component {
  state = {
    id: null,
    datas: [],
    genre: [],
    param:'genrelist'
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      )
      .then((json) => {
        this.setState({
          datas: json.data.results,
        });
      });
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US"
      )
      .then((json) => {
        this.setState({
          genre: json.data.genres,
        });
      });
  }

  render() {
    console.log(this.props);
    
    let id = this.props.match.params.id;
    const { genre } = this.state; // eslint-disable-next-line
    const genreTitle = genre.filter((e) => e.id == id).map((e) => e.name);

    return (
      <div>
        <div className="genre-title">
          <h3>{genreTitle}</h3>
          <hr />
        </div>
        <MovieCards datas={this.state.datas} param={this.state.param} />
      </div>
    );
  }
}

export default GenreList;
