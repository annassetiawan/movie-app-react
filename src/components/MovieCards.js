import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCards extends Component {
  render() {
    const { datas,param } = this.props;
    const dataList = datas.length ? (
      datas.map((data) => {
        return (
          <Link to={`/${param}/` + data.id} key={data.id}>
            <div className="movies-card">
              <img
                src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
                alt="pict"
              />
              <p className="title-movies">{data.title}
                  {data.name}{" "}</p>
              <p className="release-movies">{data.release_date} {data.first_air_date}</p>
            </div>
          </Link>
        );
      })
    ) : (
      <div className="center">Loading Data</div>
    );

    return <div className="content ">{dataList}</div>;
  }
}

export default MovieCards;
