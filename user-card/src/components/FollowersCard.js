import React from 'react';

const FollowersCard = (props) => {
    return(
        <div>
            {props.followers.map(person => {
                return(
                    <div key={person.id}>
                        <img src={person.avatar_url} alt={person.login}/>
                        <h1>{person.login}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;