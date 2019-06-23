import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';


class App extends Component {
    state = {
        users: [],
        //user will be an object
        user: {},
        repos: [],
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

    //get single github user;
    getUser = async(username) => {
          this.setState({loading: true});
        const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${
            process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({
            //not res.data.item
            //so when getUser is called, the this.state.user will get filled with information from res.data
            user: res.data,
            loading: false,
        });
    }

    //get user's repos:
    getUserRepos = async(username) => {
        this.setState({loading: true});

        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
                process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${
                process.env.REACT_APP_GITHUB_CLIENT_SECRET
            }`);
        this.setState({
            //not res.data.item
            //getting the user's repos
            repos: res.data,
            loading: false,
        });
    }


    //clear users from state
    clearUsers = () => this.setState({
            users: [],
            loading: false,
            alert: null,
        });

    //Set Alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})

        setTimeout(()=>this.setState({alert: null}),5000);
    };


    render(){
        //destructuring here:
        const {users, user, loading, repos, } = this.state;
        return (
        <Router>
            <div className = 'App'>
                <Navbar />
                <div className = "container">
                    <Alert alert={this.state.alert} />
                    <Switch>
                        <Route exact path = '/' render = {props => (
                            <Fragment>
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
                            </Fragment>
                        )} />
                        <Route exact path ='/about' component={About} />
                        <Route exact path = '/user/:login' render={props => (
                            <User
                                {...props}
                                getUser = {this.getUser}
                                getUserRepos = {this.getUserRepos}
                                user={user}
                                repos= {repos}
                                loading = {loading}
                            />
                        )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
        );
    };
};

export default App;
