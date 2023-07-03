import './dashboard.css';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/SideBar';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


export default function Dashboard (props) {
    const { userUsername, setIsLoggedIn } = props;
    return (
        <Router>
            <Routes>
                <Route path={"/"} />
                <Route path={"/favorites"} />
                <Route path={"/watchlater"} />
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
            </Routes>

            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
            <Sidebar />
        </Router>
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
