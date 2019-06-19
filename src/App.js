import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = {
        users: [],
        //there will be a moment in time while we are waiting for data to be fetched, so that if loading, we show spinner
        loading: false,
    }
//send state down to components via props
    async componentDidMount() {
        // console.log("client_secret: ", process.env.REACT_APP_GITHUB_CLIENT_SECRET);
        this.setState({
            loading: true,

        })
        const res = await axios.get(`https://api.github.com/users?client_id=
        $ {
            process.env.REACT_APP_GITHUB_CLIENT_ID
        } & client_secret = $ {
            process.env.REACT_APP_GITHUB_CLIENT_SECRET
        }`);
        this.setState({
            users: res.data,
            loading: false,
        })
    }
    render(){
        return (
        <div className = 'App'>
            <Navbar />

            <div className = "container">
                <Search />
                <Users
                    loading = {this.state.loading}
                    users = {this.state.users}
                / >
            </div>
        </div>
        );
    }
}

export default App;
