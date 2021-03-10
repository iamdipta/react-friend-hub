import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const [friend, setFriend] = useState({})
    const {friendId} = useParams();
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    const {name, email,phone} = friend;

    return (
        <div>
            <h3>Friend details component{friendId}</h3>
            <h1>Name: {name}</h1>
            <p>Gmail: {email}</p>
            <p>Phone: {phone}</p>

        </div>
    );
};

export default FriendDetails;