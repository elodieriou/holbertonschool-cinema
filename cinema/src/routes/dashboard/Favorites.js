import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Favorites () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:8000/api/titles/favorite', { headers: { 'Authorization': `Bearer ${accessToken}`} })
            .then((response) => setMovies(response.data))
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className={'favorites'}>
            <h1>Movies you like</h1>
            <div className={'movies-cards'}>
                { movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}
