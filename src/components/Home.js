import React from 'react';
import { useEffect, useState } from 'react';
import Friends from './Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            {
                friends.map(friends => <Friends friends={friends}></Friends>)
            }

        </div>
    );
};


export default Home;