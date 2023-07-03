import './dashboard.css';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/SideBar';
import Filter from '../../components/movies/Filter';
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
            <div className={'dashboard'}>
                <Sidebar />
                <Filter title={'Search Movies'}/>
            </div>
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
