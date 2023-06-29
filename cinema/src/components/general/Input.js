import './general.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input (props) {

    const { label, type, className, icon, inputAttributes } = props;

    const [value, setValue] = useState('');
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <React.Fragment>
            {icon && <FontAwesomeIcon icon={icon} />}
            <label htmlFor={`input-${className}`}>{label}</label>
            <input id={`input-${className}`}
                   className={className}
                   type={type}
                   value={value}
                   onChange={(event) => handleInput(event)}
                   {...inputAttributes}/>
        </React.Fragment>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    icon: PropTypes.element,
    inputAttributes: PropTypes.object
};

Input.defaultProps = {
    label: '',
    type: '',
    className: '',
    value: undefined,
    setValue: () => {},
    icon: null,
    inputAttributes: {}
};
