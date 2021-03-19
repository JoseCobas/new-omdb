import React, { Component } from 'react'
import Form from './Form';
import MovieList from './MovieList';

 class MovieAPI extends Component {
  constructor(props) {
    super(props)
  
      this.state = {
       posts: []
    } 
  } 

  fetchPosts = async (e) => {
    try {
      const inputValue = e.target.value;
      let Api = `http://www.omdbapi.com/?apikey=ee2bebbc&s=${inputValue}`;
      const response = await fetch(Api);
      const data = await response.json();
      console.log(data);

      this.setState({
        posts: data
      })
    } catch (error) {
      console.log(error);
    }
  };
 
  render() {
    const { posts } = this.state; 
  
    return (
      <div>

       <Form fetch={this.fetchPosts}/>

      <section>
        {
          posts.Search ?
          posts.Search.map( movie => (
            <MovieList 
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              poster={movie.Poster}
            />
          ))
          : "no data"
        }
      </section>
       
      </div>
    )
  }
}

export default MovieAPI
