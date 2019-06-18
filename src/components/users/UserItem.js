import React, { Component } from 'react'

class UserItem extends Component {

    render() {
        //destructure here so that we don't have to keep calling this.state in the return method
        const {login, avatar_url, html_url} = this.props.user;
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
                    <a href ={html_url} className ='btn btn-dark btn-sm my-1'>
                        More
                    </a>
              </div>
            </div>
        )
    }
}

export default UserItem
