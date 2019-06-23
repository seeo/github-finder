//not going to use a state here, but will use a component life cycle method here
import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class User extends Component {
    //this fires right away when the User component is loaded
    componentDidMount(){
        //simultaneously call getUser and getUserRepos when the componentDidMount runs
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    }

    render() {
        //destructuring here...
        const{
            name,
            avatar_url,
            location,
            bio,
            blog,
            company,
            login,   //login is also the username, as per the Github response.data API
            html_url,
            followers,
            following,
            public_repos,
            public_gist,
            hireable,

        } = this.props.user;

        const{loading, repos} = this.props;

        //so that when page is loading, the spinner will appear, as user name is being fetched.
        if(loading) return (<Spinner />);

        return (
            <Fragment>
                <Link to = '/' className = 'btn btn-light'>
                    Back to Search
                </Link>
                Hireable: {''}
                {hireable ? (
                    <i className = "fas fa-check text-success" />
                ) : (
                    <i className = "fas fa-times-circle text-danger" />
                )}
                <div className = "card grid-2">
                    <div className="all-center">
                        <img
                            src = {avatar_url}
                            className = "round-img"
                            alt ="user's avatar"
                            style={{width: '150px'}}
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                        )}
                        <a href = {html_url} className = "btn btn-dark my-1">
                            Visit Github Profile
                        </a>
                        <ul>
                            <li>
                                {login &&(
                                <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>
                                )}
                            </li>
                            <li>
                                {company &&(
                                <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>
                                )}
                            </li>
                            <li>
                                {blog &&(
                                <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "card text-center">
                    <div className = "badge badge-primary">Followers: {followers} </div>
                    <div className = "badge badge-success">Following: {following} </div>
                    <div className = "badge badge-light">Public Repos: {public_repos} </div>
                    <div className = "badge badge-dark">Public Gists: {public_gist} </div>
                </div>

                <Repos repos={repos} />
            </Fragment>
        )
    }
}

export default User
