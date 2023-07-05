import './dashboard.css';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


export default function Dashboard (props) {
    const { userUsername, setIsLoggedIn } = props;
    return (

        <Router>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
            <Sidebar />
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/favorites"} element={<Favorites/>}/>
                <Route path={"/watchlater"} />
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
            </Routes>
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
