//not going to use a state here, but will use a component life cycle method here
import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export class User extends Component {
    //this fires right away when the User component is loaded
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const{
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,   //login is also the username, as per the Github response.data API
            html_url,
            followers,
            following,
            public_repos,
            public_gist,
            hireable,
        } = this.props.user;

        const{loading} = this.props;

        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
