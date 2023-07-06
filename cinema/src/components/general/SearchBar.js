import './general.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar (props) {
    const { title, setTitle } = props;

    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <React.Fragment>
            <FontAwesomeIcon  icon={faSearch} className={'icon-search'}/>
            <input type={"search"}
                   className={'search-bar'}
                   placeholder={'Search movies'}
                   onChange={(event) => handleInput(event)}
                   value={title}
            />
        </React.Fragment>
    );
}

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    title: '',
    setTitle: () => {}
};
