import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    render() {
        return (
            <div style = {userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user = {user} />
                ))}
            </div>
        )
    }
}

const userStyle ={
    //this style is crazy... I would have done bootstrap div cards...
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users;
