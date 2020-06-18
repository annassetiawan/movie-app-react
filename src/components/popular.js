import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Popular extends Component {
  
  state = {
    datas: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US&page=1"
      )
      .then((json) => {
        this.setState({
          datas: json.data.results,
        });
      });
      console.log(this.props)
      
  }

  render() {
    const { datas } = this.state;
    const dataList = datas.length ? (
      datas.map((data) => {
        return (
          <div className="popular-menu" key={data.id}>
            <Link to={"/popular/" + data.id}>
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

    return <div className="content ">{dataList}</div>;
  }
}

export default Popular;
