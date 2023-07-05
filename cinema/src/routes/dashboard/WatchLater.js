import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function WatchLater () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:8000/api/titles/watchlater', { headers: { 'Authorization': `Bearer ${accessToken}`} })
            .then((response) => setMovies(response.data))
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className={'watchlater'}>
            <h1>Movies to watch later</h1>
            <ul className={'movies-cards'}>
                { movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
        </div>
    )
}
