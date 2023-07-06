import './movies.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Tag (props) {
    const { genre, filter, genres, setGenres } = props;
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected) {
            setSelected(false);
            const unselectedGenre = genres.filter((g) => g !== genre);
            setGenres(unselectedGenre);

        } else {
            setSelected(true);
            genres.push(genre)
            if (genres[0] === "") genres.shift();
            setGenres(genres);
        }
    }

    return (
        <li className={selected ? 'tag selected' : 'tag'}
            onClick={() => handleTag()}>
            {genre}
        </li>
    );
}

Tag.propTypes = {
    genre: PropTypes.string.isRequired,
    filter: PropTypes.bool.isRequired,
    genres: PropTypes.array.isRequired,
    setGenres: PropTypes.func.isRequired
};

Tag.defaultProps = {
    genre: '',
    filter: false,
    genres: [],
    setGenres: () => {}
};
