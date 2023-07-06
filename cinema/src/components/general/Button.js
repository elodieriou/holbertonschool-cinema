import './general.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button (props) {
    const { text, type, className, onClick, icon } = props;

    return (
        <button className={className}
                type={type}
                onClick={() => onClick()}>
            {icon && <FontAwesomeIcon icon={icon} className={'icon'}/>}
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object
};

Button.defaultProps = {
    text: '',
    className: '',
    onClick: () => {},
    icon: null
};
