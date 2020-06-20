import React, { Component } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import starFill from "@iconify/icons-bi/star-fill";
import date from "../assets/date.svg";
import tag from "../assets/tag.svg";
import time from "../assets/time.svg";
import bxChevronLeftCircle from '@iconify/icons-bx/bx-chevron-left-circle';
import {withRouter} from 'react-router-dom'


class MovieDetails extends Component {
  state = {
    id: null,
    genres: [],
    trailers: [],
    trailersTv: [],
    cast: [],
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US`
      )
      .then((json) => {
        this.setState({
          id: json.data,
          genres: json.data.genres,
        });
        console.log(json.data);
        
      })
      .catch((error) => {
        console.log(error);
    });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US`
      )
      .then((json) => {
        this.setState({
          trailers: json.data.results.slice(0, 1),
        });
      })
      .catch((error) => {
        console.log(error);
    });
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US`
      )
      .then((json) => {
        this.setState({
          trailersTv: json.data.results.slice(0, 1),
        });
      })
      .catch((error) => {
        console.log(error);
    });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f2b57ce39f26dee8ce6bf29486affd98&language=en-US`
      )
      .then((json) => {
        this.setState({
          cast: json.data.cast.slice(0, 5),
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    const { trailers,trailersTv } = this.state;
    const trailerList = trailers.length ? (
      trailers.map((trailer) => {
        return (
          <iframe
          key={trailer.id}
            title="trailer"
            src={`http://www.youtube.com/embed/${trailer.key} `}
            width="744"
            height="428"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      })
    ) : (
      trailersTv.map((trailer) => {
        return (
          <iframe
          key={trailer.id}
            title="trailer"
            src={`http://www.youtube.com/embed/${trailer.key} `}
            width="744"
            height="428"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      })
    );

    
     

    const { genres } = this.state;
    const genreList = genres.map((genre) => {
      return genre.name + " ";
    });

    const defAvatar = 'http://www.gravatar.com/avatar/?d=mm';
    const defImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
    
    

    const { cast } = this.state;
    const castList = cast.map((cast) => {
      
      return (
        <div className="cast-details" key={cast.id}>
          <div className="profile-image">
            <img
            onError={(e)=>{e.target.src=defAvatar}}
              src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`}
              alt="profile"
            />
          </div>
          <div className="cast-name">
            <div className="profile-name">{cast.name}</div>
            <div className="profile-character">{cast.character}</div>
          </div>
        </div>
      );
      
    });

    const details = this.state.id ? (
      <div className="details">
        <div className="backdrop">
          <img
           onError={(e)=>{e.target.src=defImage}}
            src={`https://image.tmdb.org/t/p/w1280/${this.state.id.backdrop_path}`}
            alt=" "
          />
        </div>
        <div className="details-info">
          <div className="movies-info">
            <div className="side-left">
              <img
               onError={(e)=>{e.target.src=defImage}}
                src={`https://image.tmdb.org/t/p/w500/${this.state.id.poster_path}`}
                alt="pict"
                
              />
            </div>
            <div className="side-right">
              <h1 className="title-details">
                {this.state.id.title} ({this.state.id.release_date.slice(0, 4)})
              </h1>
              <div className="vote">
                <Icon
                  icon={starFill}
                  style={{ color: "#ffc25c", fontSize: "30px" }}
                />
                <h1>{this.state.id.vote_average}</h1>
              </div>
              <p className="users">User Score</p>
              <div className="side-details">
                <img className="date" src={date} alt="date" />
                <p className="details">{this.state.id.release_date}</p>
                <img className="tag" src={tag} alt="tag" />
                <p className="details">{genreList}</p>
                <img className="time" src={time} alt="time" />
                <p className="details">{this.state.id.runtime + " min"}</p>
              </div>
              <div className="synopsis">
                <h3 className="sub-title-details">Synopsis</h3>
                <p className="overview">{this.state.id.overview}</p>
              </div>
            </div>
          </div>
          <div className="sectionB">
            <div className="cast">
              <h3 className="cast-title">Cast Overview</h3>
              {castList}
            </div>
            <div className="trailer side-right">
              <h3 className="sub-title-details">Trailer</h3>
              {trailerList}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="details">Loading post...</div>
    );

    

    return <div className="content-details">
      <div className="button-back">
      <Icon onClick={this.props.history.goBack} icon={bxChevronLeftCircle} style={{color: '#eaeaea', fontSize: '42px'}} />
      </div>
      {details}
      </div>;
  }
}

export default withRouter(MovieDetails);
