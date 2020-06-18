import React, { Component } from "react";
import axios from "axios";
import { NavLink,Link } from "react-router-dom";

class Home extends Component {
  state = {
    topratedData: [],
    popularData: [],
    trendingData: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US&page=1"
      )
      .then((json) => {
        this.setState({
          topratedData: json.data.results.slice(0, 4),
        });
      });

    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US&page=1"
      )
      .then((json) => {
        this.setState({
          popularData: json.data.results.slice(0, 5)
        });
      });

      axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=f2b57ce39f26dee8ce6bf29486affd98"
      )
      .then((json) => {
        this.setState({
          trendingData: json.data.results.slice(0, 6)
        });
      });
  }

  render() {

    const { trendingData } = this.state;
    const trendingDataList = trendingData.length ? (
      trendingData.map((data) => {
        return (
          <div className="trending-menu" key={data.id}>
            <Link to={"/trending/" + data.id}>
              <div className="movies-card">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
                  alt="pict"
                />
                <p className="title-movies">
                  {data.title}
                  {data.name}{" "}
                </p>
                <p className="release-movies">
                  {data.release_date} {data.first_air_date}
                </p>
              </div>
            </Link>
          </div>
        );
      })
    )  : (
      <div className="center">Loading Data</div>
    );

    const { popularData } = this.state;
    const popularDataList = popularData.length ? (
      popularData.map((data) => {
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

    const { topratedData } = this.state;
    const topratedDataList = topratedData.length ? (
      topratedData.map((data) => {
        return (
          <div className="toprated-menu" key={data.id}>
            <Link to={"/toprated/" + data.id}>
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

    return (
      <div className="home">
        <div className="sub-title">
          <h2>Top Rated</h2>
          <NavLink className="see-all" to="/toprated">
            <p>SEE ALL</p>
          </NavLink>
        </div>
        <div className="content ">{topratedDataList}</div>;

        <div className="sub-title">
          <h2>Popular</h2>
          <NavLink className="see-all" to="/popular">
            <p>SEE ALL</p>
          </NavLink>
        </div>
        <div className="content ">{popularDataList}</div>;

        <div className="sub-title">
          <h2>Trending</h2>
          <NavLink className="see-all" to="/trending">
            <p>SEE ALL</p>
          </NavLink>
        </div>
        <div className="content ">{trendingDataList}</div>;
      </div>
    );
  }
}

export default Home;
