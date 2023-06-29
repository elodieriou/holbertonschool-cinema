import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.post('http://localhost:8000/api/auth/', {}, { headers: { 'authorization': `Bearer ${accessToken}`} })
        .then((response) => {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        })
        .catch((error) => console.log(error))
  }, []);

  return (
    <div className="App">
      { isLoggedIn && <p>Dashboard</p> }
      { !isLoggedIn && <p>Authentication</p> }
    </div>
  );
}

export default App;
