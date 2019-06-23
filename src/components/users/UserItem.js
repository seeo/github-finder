import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//current we have a href that opens a new tab, but we actually want a Link that goes to user profile

//beecome stateless functional component
const UserItem = ({user: {login, avatar_url, html_url}}) => {
        //destructure here so that we don't have to keep calling this.state in the return method
        // const {login, avatar_url, html_url} = props.user;
        return (
            <div className = "card text-center">
                <img
                    src={avatar_url}
                    alt = "User's Avatar"
                    className ="round-img"
                    style={{width: '60px'}}
                />
                <h3>{login}</h3>
                <div>
                    <Link to ={`/user/${login}`} className ='btn btn-dark btn-sm my-1'>
                        More
                    </Link>
              </div>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
