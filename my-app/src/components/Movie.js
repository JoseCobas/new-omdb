import React, { Component } from 'react';

class Movie extends Component{

    render(){
        return (
    
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.year}</p>
                <p>{this.props.type}</p>
                <p></p>
                <img src={this.props.poster} alt=""/>    
            </article>      
        )
    }  
}

export default Movie;
