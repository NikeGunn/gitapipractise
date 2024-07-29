import React, {useState} from 'react'
import './App.css';
import UserInfo from './UserInfo';
import UserInput from './UserInput';


function App() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [userData, setUserData] = useState(null)
  
  const fetchUserData = async() => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if(!response.ok){
        throw new Error("User not found");
      }
      const data = await response.json()
      setUserData(data)
      setError('')
      setUsername('')
    } catch (error) {
      setError(error.message)
      setUserData(null)
    }
  }


  return (
    <div>
      <UserInput 
       username = {username}
       setUsername = {setUsername}
       fetchUserData = {fetchUserData}
      />

      {error && <p style={{ color : 'red'}}>{error}</p>}

      {userData && <UserInfo userData= {userData}/>}

    </div>
  );
}

export default App;
