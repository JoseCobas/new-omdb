import React, { Component } from 'react';
import Movie from './Movie';

 class MovieList extends Component {
 
  render() {
    
    return (
        <Movie 
           title={this.props.title}
           year={this.props.year}
           type={this.props.type}
           poster={this.props.poster}
        />      
    
    )
  }
}

export default MovieList
