import React, { Component } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import classes from './Content.css'

class Content extends Component {
    render()
        {
            return(
                <div className={classes.container}>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                
                </div>
            );
    }
}

export default Content;