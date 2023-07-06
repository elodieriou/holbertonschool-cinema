import './movies.css'
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const currentYear = new Date().getFullYear();
export default function Filter (props) {
    const { minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle } = props;
    const options = ['latest', 'oldest', 'highestrated', 'lowestrated'];
    const tags = ['Action', 'Drama', 'Comedy', 'Biography', 'Romance', 'Thriller', 'War',
        'History', 'Sport', 'Sci-Fi', 'Documentary', 'Crime', 'Fantasy'];

    return (
        <div className={'filters'}>
            <div>
                <SearchBar title={title} setTitle={setTitle}/>
                <div className={'inputs'}>
                    <Input className={'min-date'} type={'number'} label={'Min Date:'} value={minYear} setValue={setMinYear}/>
                    <Input className={'max-date'} type={'number'} label={'Max Date:'} value={maxYear} setValue={setMaxYear}/>
                    <SelectInput className={'sort'} label={'Sort:'} options={options} Multiple={false} value={sort} setValue={setSort}/>
                </div>
            </div>
            <div className={'tags'}>
                { tags.map((tag) => (
                    <Tag key={tag} genre={tag} genres={genres.replace(/^,/, '').split(',')} setGenres={setGenres} filter={true}/>
                ))}
            </div>
        </div>
    );
}

Filter.propTypes = {
    minYear: PropTypes.number.isRequired,
    setMinYear: PropTypes.func.isRequired,
    maxYear: PropTypes.number.isRequired,
    setMaxYear: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired,
    genres: PropTypes.string.isRequired,
    setGenres: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired
};

Filter.defaultProps = {
    minYear: currentYear,
    setMinYear: () => {},
    maxYear: currentYear,
    setMaxYear: () => {},
    sort: '',
    setSort: () => {},
    genres: null,
    setGenres: () => {},
    title: '',
    setTitle: () => {}
};
