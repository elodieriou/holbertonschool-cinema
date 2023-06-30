import './general.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input (props) {

    const { label, type, className, value, setValue, icon, inputAttributes } = props;

    const [inputValue, setInputValue] = useState(value);
    const handleInput = (event) => {
        setInputValue(event.target.value)
        setValue(event.target.value);
    };

    return (
        <React.Fragment>
            <div className={'inputs'}>
                <div className={'input-label'}>
                    {icon && <FontAwesomeIcon icon={icon} className={'input-icon'} />}
                    <label htmlFor={`input-${className}`}>{label}</label>
                </div>
                <input id={`input-${className}`}
                       className={className}
                       type={type}
                       value={inputValue}
                       onChange={(event) => handleInput(event)}
                       {...inputAttributes}/>
            </div>
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
