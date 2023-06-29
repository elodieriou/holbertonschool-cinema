import './auth.css';
import '../../components/general/Button';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/general/Button";

export default function Authentication (props) {
    const { setIsLoggedIn, setUserUsername } = props;

    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(false);

    return (
        <form>
            <Button text={"Sign In"} className={"sign-in"} onClick={() => set_switch(true)}/>
            <Button text={"Sign Up"} className={"sign-up"} onClick={() => set_switch(false)}/>
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
