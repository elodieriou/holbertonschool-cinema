import './movies.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Tag (props) {
    const { genre, filter, genres, setGenres } = props;
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected) {
            const unselectedGenre = genres.filter((g) => g !== genre);
            setGenres(unselectedGenre);
            setSelected(false);
        } else {
            const selectedGenre = [...genres, genre];
            setGenres(selectedGenre);
            setSelected(true);
        }
    }

    return (
        <li onClick={() => handleTag()}>
            {genre}
        </li>
    )
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
