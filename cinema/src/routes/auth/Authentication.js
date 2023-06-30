import './auth.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

export default function Authentication (props) {
    const { setIsLoggedIn, setUserUsername } = props;

    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <Button text={"Sign In"} type={"button"} className={"sign-in"} onClick={() => set_switch(true)}/>
            <Button text={"Sign Up"} type={"button"} className={"sign-up"} onClick={() => set_switch(false)}/>

            { _switch && <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>}
            { !_switch && <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>}
        </form>
    )
}

Authentication.propTypes = {
    setIsLoggedIn: PropTypes.func,
    setUserUsername: PropTypes.func
};

Authentication.defaultProps = {
    setIsLoggedIn: () => {},
    setUserUsername: () => {}
};
