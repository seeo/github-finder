import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: '',
    };

    static propTypes ={
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }
    //create onChange arrow function, that takes in an event parameter
    onChange = (e) => {
        //use brackets if you want to assign e.target.name as a 'key'...
        this.setState({ [e.target.name]: e.target.value  });
    }
    //deliberately created a function that is not arrow function.
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
        // console.log(this.state.text);
        /* we want to take the text that is submitted and get a method that reaches out to
        github api and search for a user */
    }

    render() {
        const {showClear, clearUsers} = this.props;
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
                {showClear && (
                <button
                    className = "btn btn-light btn-block"
                    onClick = {clearUsers}
                >
                    Clear
                </button>
                )}

            </div>

        )
    }
}

export default Search
