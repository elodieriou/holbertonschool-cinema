import './navigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header (props) {
    const { userUsername, setIsLoggedIn } = props;

    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    };

    return (
        <nav>
            <img src={"https://picsum.photos/100/100"} alt={'random avatars'}/>
            <p>Welcoming, {userUsername}! </p>
            <span onClick={() => logout()}><FontAwesomeIcon icon={faArrowRightFromBracket} className={'input-icon'} /> Logout</span>
        </nav>
    )
}

Header.propTypes = {
    userUsername: PropTypes.string.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired
};

Header.defaultProps = {
    userUsername: '',
    setIsLoggedIn: () => {}
};
