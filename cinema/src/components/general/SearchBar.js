import './general.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar (props) {
    const { title, setTitle } = props;

    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <input type={"search"}
               className={'search-bar'}
               placeholder={title}
               onChange={(event) => handleInput(event)}
        />
    )
}

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    title: '',
    setTitle: () => {}
};
