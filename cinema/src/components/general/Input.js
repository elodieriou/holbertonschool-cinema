import './general.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input (props) {

    const { label, type, className, value, setValue, icon, inputAttributes } = props;

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    return (
        <React.Fragment>
            { icon && <FontAwesomeIcon icon={icon} />}
            <label>{label}</label>
            <input className={className}
                   type={type}
                   value={value}
                   onChange={(event) => handleInput(event)}
                   {...inputAttributes}/>
        </React.Fragment>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.any,
    setValue: PropTypes.func,
    icon: PropTypes.element,
    inputAttributes: PropTypes.object
};

Input.defaultProps = {
    label: '',
    type: '',
    className: '',
    value: null,
    setValue: () => {},
    icon: null,
    inputAttributes: {}
};
