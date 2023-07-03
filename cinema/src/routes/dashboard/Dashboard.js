import './dashboard.css';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/SideBar';
import React from 'react';
import PropTypes from 'prop-types';

export default function Dashboard (props) {
    const { userUsername, setIsLoggedIn } = props;
    return (
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
            <Sidebar />
        </div>
    )
}

Dashboard.propTypes = {
    userUsername: PropTypes.string.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired
};

Dashboard.defaultProps = {
    userUsername: '',
    setIsLoggedIn: () => {}
};
