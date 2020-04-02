import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <button><Link to="/add">Add Movie</Link></button>
                <div className="mt-5">
                    <Movies />
                </div>
            </div>
        );
    }
}