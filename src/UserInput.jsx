import React from 'react'

const UserInput = ({username, setUsername, fetchUserData}) => {
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      fetchUserData()
    }
  }
  return (
    <div>
      <input 
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
        />
        <button onClick={fetchUserData}>
            Fetch User
        </button>
    </div>
  )
}

export default UserInput