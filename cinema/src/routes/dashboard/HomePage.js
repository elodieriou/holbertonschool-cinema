import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage () {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadMovies = (page) => {
            const accessToken = localStorage.getItem('accessToken');
            const headers = { 'Authorization': `Bearer ${accessToken}`};
            const params = {
                minYear: minYear.toString(),
                maxYear: maxYear.toString(),
                genres: genres.join(','),
                title,
                page,
                sort,
            };

            axios.get('http://localhost:8000/api/titles/advancedsearch', { headers, params })
                .then((response) => setMovies(response.data.titles))
                .catch((error) => console.log(error))
        };
        loadMovies(page);
    }, [minYear, maxYear, sort, genres, title, page]);

    return (
        <div className={'home-page'}>
            <Filter title={title} setTitle={setTitle}
                    genres={genres.join(',')} setGenres={setGenres}
                    minYear={Number.parseInt(minYear)} setMinYear={setMinYear}
                    maxYear={Number.parseInt(maxYear)} setMaxYear={setMaxYear}
                    sort={sort} setSort={setSort}
            />
            <ul className={'movies-cards'}>
                { movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul>
            <Button type={'button'} className={'load-more'} text={'Load More..'} onClick={() => setPage(page + 1)}/>
        </div>
    );
}
