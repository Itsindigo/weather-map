import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

         // Binds the context of the callback function to the component scope.
        this.onInputChange = this.onInputChange.bind(this);
    
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className='form-control'
                    placeholder='Get a five-day forecast in your favourite cities'    
                />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>
                        Search
                    </button>
                </span>
            </form>
        );
    }
}