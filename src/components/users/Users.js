import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

/*we change this into a functional component from a class componennt becauset there is no longer any state.
It just gets passsed in with props*/
//destructure and pull out user and loading
const Users = ({users, loading}) => {
    //got rid of the render, we just keep the return
    if(loading){
        return (<Spinner />)
    }else{
         return (
            <div style = {userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user = {user} />
                ))}
            </div>
        );
        }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle ={
    //this style is crazy... I would have done bootstrap div cards...
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users;
