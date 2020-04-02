import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddMovie from './Movie/AddMovie';
import MovieService from '../services/MovieService';
import ManageMovies from './Movie/ManageMovies';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };

        MovieService.readFromFile();

    }


    render() {
        return (
            <main>
                <Switch>
                    <Route path = "/" component = {Home} exact/>
                    <Route path ="/add" component = {AddMovie}/>
                    <Route path ="/delete" component = {ManageMovies}/>
                </Switch>
            </main>
        );
    }
}