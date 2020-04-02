import React, {Component} from 'react';
import MovieService from '../../services/MovieService';

export default class AddMovie extends Component{

    constructor(){
        super();

        this.state={
            id: Math.random(),
            title: '',
            subtitle: '',
            description: '',
            year: '',
            imageUrl: '',
            rating: 0,
            errorImageUrl: false,
            errorTitle: false,
            errorSubtitle: false,
            errorDescription: false,
            errorYear: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange (event){
        const {name,value} = event.target;
        this.setState({[name] : value});
        console.log(name + ':' + value);
    }

    handleSubmit (){
        event.preventDefault();
        console.log(this.state);
        let valid = this.validateForm(this.state);
        console.log(valid);
        console.log(this.state);

        const movie ={
            id: this.state.id,
            title: this.state.title,
            subtitle: this.state.subtitle,
            description: this.state.description,
            year: this.state.year,
            imageUrl: this.state.imageUrl,
            rating: 0,
        };

        valid ? MovieService.addMovies(movie) : alert('Please fill all information');
             
    }

    validateForm (values){
        let valid = true;

        Object.entries(values).map((key)=>{
            let value = key[1];
            let name = key[0];
            if(!name.includes('error')){
                if(value === ''){
                    const er = 'error' + name.charAt(0).toUpperCase() + name.slice(1);
                    this.setState({[er] : true});
                    valid = false;
                }
            }
        });

        return valid;

    }

    render(){
        return (
            <div>
                <h1>Add movie</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value = {this.state.imageUrl}
                        name = "imageUrl"
                        placeholder="Url of picture..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    {this.state.errorImageUrl && 'Please enter url'}
                    <br/><br/>

                    <input
                        type="text"
                        value = {this.state.title}
                        name = "title"
                        placeholder="Title of the movie..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    {this.state.errorTitle && 'Please enter title'}
                    <br/><br/>

                    <input
                        type="text"
                        value = {this.state.subtitle}
                        name = "subtitle"
                        placeholder="Subtitle of the movie..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    {this.state.errorSubtitle && 'Please enter subtitle'}
                    <br/><br/>

                    <input
                        type="text"
                        value = {this.state.description}
                        name = "description"
                        placeholder="Description of the movie..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    {this.state.errorDescription && 'Please enter description'}
                    <br/><br/>

                    <input
                        type="number"
                        value = {this.state.year}
                        name = "year"
                        placeholder="Enter year..."
                        onChange={this.handleChange}
                    />
                    <br/>
                    {this.state.errorYear && 'Please enter year'}
                    <br/><br/>
                    <button>Submit</button>
                    
                </form>
            </div>
            
        );
    }
    

}