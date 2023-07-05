import './movies.css';
import unavailable from '../../assets/unavailable.png';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegStar, faClock as faRegClock } from '@fortawesome/free-regular-svg-icons';

export default function MovieCard (props) {
    const { movie } = props;
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const headers = { 'Authorization': `Bearer ${accessToken}`}

        axios.get('http://localhost:8000/api/titles/favorite', { headers })
            .then((response) => {
                const isFavoriteMovie = response.data.some((title) => title.id === movie.id);
                if (isFavoriteMovie) setIsFavorite(true);
            })
            .catch((error) => console.log(error));

        axios.get('http://localhost:8000/api/titles/watchlater', { headers })
            .then((response) => {
                const isWatchLaterMovie = response.data.some((title) => title.id === movie.id);
                if (isWatchLaterMovie) setIsWatchLater(true);
            })
            .catch((error) => console.log(error));

    }, [movie.id]);

    const handleClick = (type) => {
        const accessToken = localStorage.getItem('accessToken');
        const headers = { 'Authorization': `Bearer ${accessToken}`}

        if (type === 'favorite' && isFavorite) {
            axios.delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, { headers })
                .then((response) => setIsFavorite(false))
                .catch((error) => console.log(error))
        }

        else if (type === 'favorite' && !isFavorite) {
            axios.post(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {}, { headers })
                .then((response) => setIsFavorite(true))
                .catch((error) => console.log(error))
        }

        else if (type === 'watchlater' && isWatchLater) {
            axios.delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, { headers })
                .then((response) => setIsWatchLater(false))
                .catch((error) => console.log(error))
        }

        else if (type === 'watchlater' && !isWatchLater) {
            axios.post(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {}, { headers })
                .then((response) => setIsWatchLater(true))
                .catch((error) => console.log(error))
        }
        axios.get('http://localhost:8000/api/titles/watchlater', { headers })
            .then((response) => console.log(response.data))
    }

    return (
        <li key={movie.id} className={'movie-card'}>
            <img src={movie.imageurls}
                 onError={(event) => event.target.src = unavailable}
                 alt={movie.title} width={300} height={400}/>
            <div className={'movie'}>
                <div className={'header-card'}>
                    <div className={'movie-icon'}>
                        { isWatchLater && <FontAwesomeIcon icon={faClock} className={'pos'} onClick={() => handleClick('watchlater')}/>}
                        { !isWatchLater && <FontAwesomeIcon icon={faRegClock} className={'pos'} onClick={() => handleClick('watchlater')}/>}

                        { isFavorite && <FontAwesomeIcon icon={faStar} className={'pos'} onClick={() => handleClick('favorite')}/>}
                        { !isFavorite && <FontAwesomeIcon icon={faRegStar} className={'pos'} onClick={() => handleClick('favorite')}/>}
                    </div>
                </div>
                <div className={'body-card'}>
                    <div className={'movie-informations'}>
                        <h4>{movie.title}</h4>
                        <div className={'movie-synopsis'}>
                            <p>{movie.synopsis}</p>
                            <div className={'movie-genres'}>
                                { movie.genres.map((genre) => (
                                    <span key={genre}>{genre}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object
};

MovieCard.defaultProps = {
    movie: {}
};
