import React, { Component } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

export default class MovieDb extends Component {
  state = {
    movies: [],
    URL: null
  };
  componentWillMount() {
    console.log(this.props.URL + this.props.page);

    axios.get(this.props.URL + this.props.page).then(res => {
      const mov = res.data.results;
      console.log(mov);
      console.log(this.props.URL, 2);
      this.setState({ movies: mov });
    });
  }

  render() {
    let Card = null;
    if (this.state.movies) {
      Card = (
        <div>
          {this.state.movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={
                movie.title === undefined ? movie.original_name : movie.title
              }
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      );
    }
    return <div>{Card}</div>;
  }
}
