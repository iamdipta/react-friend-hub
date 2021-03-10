import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, website,id} = props.friends;
    const friendsStyle ={
        border: '1px solid gold',
        margin:'10px',
        padding:'5px',
        borderRadius:'20px',
    }
    return (
        <div style ={friendsStyle}>
            <h3>Name: {name}</h3>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
            <Link  to={`/friend/${id}`}>Show Details</Link>
        </div>
    );
};

export default Friends;