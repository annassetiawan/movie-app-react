import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class GenreList extends Component {
  state = {
    id: null,
    datas: [],
    genre: [],
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
    const { datas } = this.state;

    const dataList = datas.length ? (
      datas.map((data) => {
        return (
          <div className="genrelist-menu" key={data.id}>
            <Link to={"/genres/genrelist/" + data.id}>
              <div className="movies-card">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
                  alt="pict"
                />
                <p className="title-movies">{data.title}</p>
                <p className="release-movies">{data.release_date}</p>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <div className="center">Loading Data</div>
    );

    let id = this.props.match.params.id;
    const { genre } = this.state; // eslint-disable-next-line
    const genreTitle = genre.filter((e) => e.id == id).map((e) => e.name);

    return (
      <div>
        <div className="genre-title">
          <h3>{genreTitle}</h3>
          <hr />
        </div>
        <div className="content ">{dataList}</div>
      </div>
    );
  }
}

export default GenreList;
