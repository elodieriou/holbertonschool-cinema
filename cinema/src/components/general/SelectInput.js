import './general.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function SelectInput (props) {
    const { label, options, Multiple, className, value, setValue } = props;

    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <React.Fragment>
            <label htmlFor={`select-${className}`}>{label}</label>
            <select id={`select-${className}`}
                    className={className}
                    multiple={Multiple}
                    value={value}
                    onChange={(event) => handleSelect(event)}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </React.Fragment>
    )
}

SelectInput.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    Multiple: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.any,
    setValue: PropTypes.func
};

SelectInput.propTypes = {
    label: '',
    options: [],
    Multiple: false,
    className: '',
    value: null,
    setValue: () => {}
};
