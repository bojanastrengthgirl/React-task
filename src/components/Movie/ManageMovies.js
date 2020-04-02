import React, {Component} from 'react';
import MovieService from '../../services/MovieService';

export default class ManageMovies extends Component{

    constructor(){
        super();
        this.state ={
            movies : []
        };

        this.deleteMovie = this.deleteMovie.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    deleteMovie(id){
        MovieService.deleteMovie(id);
        alert('Movie deleted');
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    render(){
        return(
            <div>
                <h1> List of movies</h1>
                <table>
                    {this.state.movies.map(( listValue, index ) => {
                        return (
                            <tr key={index}>
                                <td>{listValue.id}</td>
                                <td>{listValue.title}</td>
                                <td>{listValue.subtitle}</td>
                                <td><button onClick = {() =>this.deleteMovie(listValue.id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}