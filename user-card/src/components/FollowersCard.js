import React from 'react';

const FollowersCard = (props) => {
    return(
        <div className="followers">
            {props.followers.map(person => {
                return(
                    <div className="follower" key={person.id}>
                        <img src={person.avatar_url} alt={person.login}/>
                        <h1>{person.login}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;