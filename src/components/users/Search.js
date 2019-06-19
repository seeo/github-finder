import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: '',
    };
    //create onChange arrow function, that takes in an event parameter
    onChange = (e) => {
        //use brackets if you want to assign e.target.name as a 'key'...
        this.setState({ [e.target.name]: e.target.value  });
    }
    //deliberately created a function that is not arrow function.
    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.text);
        /* we want to take the text that is submitted and get a method that reaches out to
        github api and search for a user */
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit} className = "form">
                    <input
                        type = "text"
                        name = "text"
                        placeholder = "Search Users..."
                        value = {this.state.text}
                        onChange = {this.onChange}
                    />
                    <input
                        type = "submit"
                        value="Search"
                        className = "btn btn-dark btn-block"
                    />
                </form>
            </div>
        )
    }
}

export default Search
