import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddMovie from './Movie/AddMovie';
import MovieService from '../services/MovieService';

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
                </Switch>
            </main>
        );
    }
}