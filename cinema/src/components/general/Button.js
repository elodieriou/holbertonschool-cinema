import './general.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button (props) {
    const { text, className, onClick, icon } = props;

    return (
        <button className={className}
                type={"button"}
                onClick={() => onClick()}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.element
};

Button.defaultProps = {
    text: '',
    className: '',
    onClick: () => {},
    icon: null
};
