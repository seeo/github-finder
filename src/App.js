import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = {
        users: [],
        //there will be a moment in time while we are waiting for data to be fetched, so that if loading, we show spinner
        loading: false,
        alert: null,
    }
//send state down to components via props
    async componentDidMount() {
        // console.log("client_secret: ", process.env.REACT_APP_GITHUB_CLIENT_SECRET);
        this.setState({loading: true,});

        const res = await axios.get(`https://api.github.com/users?client_id=
        $ {
            process.env.REACT_APP_GITHUB_CLIENT_ID
        } & client_secret = $ {
            process.env.REACT_APP_GITHUB_CLIENT_SECRET
        }`);
        this.setState({
            users: res.data,
            loading: false,
        });
    }

    // SEARCH GITHUB USERS;
    /*create function searchUsers - since our Search component takes in this.props.searchUsers(this.state.text);
    we need to pass in text as an argument  */
    searchUsers = async text => {
        this.setState({loading: true});
        const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${
            process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({
            users: res.data.items,
            loading: false,
        });
    };

    //clear users from state
    clearUsers = () => this.setState({
            users: [],
            loading: false,
            alert: null,
        });

    //Set Alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
    }


    render(){
        const {users, loading} = this.state;
        return (
        <div className = 'App'>
            <Navbar />
            <div className = "container">
                <Alert alert={this.state.alert} />
                <Search
                    searchUsers={this.searchUsers}
                    clearUsers = {this.clearUsers}
                    showClear = {users.length > 0 ? true : false}
                    setAlert = {this.setAlert}
                />
                <Users
                    loading = {loading}
                    users = {users}
                />
            </div>
        </div>
        );
    };
};

export default App;
