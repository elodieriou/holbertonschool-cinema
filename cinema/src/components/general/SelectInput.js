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
            <div className={`selects-${className}`}>
                <label className={`label-${className}`} htmlFor={`select-${className}`}>{label}</label>
                <select id={`select-${className}`}
                        className={className}
                        multiple={Multiple}
                        value={value}
                        onChange={(event) => handleSelect(event)}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

        </React.Fragment>
    )
}

SelectInput.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    Multiple: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired
};

SelectInput.defaultProps = {
    label: '',
    options: [],
    Multiple: false,
    className: '',
    value: null,
    setValue: () => {}
};
