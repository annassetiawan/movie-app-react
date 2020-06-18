import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Genres extends Component {
  state = {
    datas: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US"
      )
      .then((json) => {
        this.setState({
          datas: json.data.genres,
        });
      });
  }

  render() {
    const { datas } = this.state;
    const dataList = datas.length ? (
      datas.map((data) => {
        return (
          <div className="genre-menu" key={data.id}>
            <Link to={"/genres/" + data.id}>
              <div className="movies-card-genre">
                <p className="title-movies">{data.name}</p>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <div className="center">Loading Data</div>
    );

    return <div className="content-genre">{dataList}</div>;
  }
}

export default Genres;
