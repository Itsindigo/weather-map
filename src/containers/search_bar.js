import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form className='input-group'>
                <input />
                <span className='input-group-button'>
                    <button className='btn btn-secondary' type='submit'>
                        Search
                    </button>
                </span>
            </form>
        );
    }
}