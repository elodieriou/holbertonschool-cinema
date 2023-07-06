import './auth.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import axios from "axios";

export default function Authentication (props) {
    const { setIsLoggedIn, setUserUsername } = props;

    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (_switch) {
            axios.post('http://localhost:8000/api/auth/login', {username, password})
                .then((response) => {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    setUserUsername(username);
                    setIsLoggedIn(true);
                })
                .catch((error) => {
                    setUserUsername('');
                    setIsLoggedIn(false);
                    console.log(error)
                })
        } else {
            axios.post('http://localhost:8000/api/auth/register', {username, password})
                .then((response) => {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    setUserUsername(username);
                    setIsLoggedIn(true);
                })
                .catch((error) => {
                    setUserUsername('');
                    setIsLoggedIn(false);
                    console.log(error)
                })
        }
    }

    return (
        <div className={"login-register"}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className={"sign-button"}>
                    <Button text={"Sign In"} type={"button"} className={_switch ? "active" : "signIn-button"} onClick={() => set_switch(true)}/>
                    <Button text={"Sign Up"} type={"button"} className={!_switch ? "active" : "signUp-button"} onClick={() => set_switch(false)}/>
                </div>

                { _switch && <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>}
                { !_switch && <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>}
            </form>
        </div>
    );
}

Authentication.propTypes = {
    setIsLoggedIn: PropTypes.func,
    setUserUsername: PropTypes.func
};

Authentication.defaultProps = {
    setIsLoggedIn: () => {},
    setUserUsername: () => {}
};
