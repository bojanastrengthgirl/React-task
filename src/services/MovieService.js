import movies from './movies.json';

export default class MovieService {

    constructor(){
        this.movies = [];
    }
    
    static readFromFile(){
        this.movies = movies ?  movies : [];
        return this.movies;
    }

    static getMovies() {
        return this.movies;
    }

    static addMovies(movie){
        this.movies.push(movie);
        console.log(movies);
    }

    static deleteMovie(id){
        this.movies = this.movies.filter(el=> el.id !=id);
    }

}