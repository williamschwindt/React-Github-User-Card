import React from 'react';

const UserCard = ({ user }) => {
    return(
        <div className="user">
            <img src={user.avatar_url} alt={user.name}/>
            <h1>{user.name}</h1>
            <p>{user.location}</p>
            <p>{user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </div>
    )
}

export default UserCard;