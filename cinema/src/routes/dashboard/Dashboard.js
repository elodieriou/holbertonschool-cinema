import './dashboard.css';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/SideBar';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const movie = {
    "createdAt": "2022-03-28T10:02:29.452Z",
    "genres": ["Sport", "Documentary"],
    "id": 2,
    "imageurls": [
        "https://m.media-amazon.com/images/M/MV5BYmE1MjEyM2UtMWU5NS00NjRjLWFlY2ItMTU5Mjk4ODk0MzdjXkEyXkFqcGdeQXVyOTE3NzY4OTQ@._V1_UY268_CR33,0,182,268_AL_.jpg"
    ],
    "imdbId": "tt9899344",
    "imdbrating": -1,
    "quotes": [],
    "released": 2022,
    "reviews": [],
    "runtime": -1,
    "summary": "",
    "synopsis": "Dreamers in a lonely circus.",
    "title": "GodHead: In a fiction, in a dream of passion",
    "trailerUrl": [],
    "type": "movie",
    "updatedAt": "2022-03-28T10:02:29.452Z"
};
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
                <div>
                    <Sidebar />
                    <Filter title={'Search Movies'}/>
                </div>
                <MovieCard movie={movie}/>
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
