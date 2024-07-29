import React from 'react'

const UserInfo = ({userData}) => {
  return (
    <div>
        <h3>{userData.login}</h3>
        <img src={userData.avatar_url} alt={userData.login} width='100'/>
        <p>{userData.bio}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Location: {userData.location}</p>
      </div>
  )
}

export default UserInfo