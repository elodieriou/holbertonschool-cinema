import './general.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button (props) {
    const { text, className, onClick, icon } = props;

    return (
        <button className={className}
                type={"submit"}
                onClick={() => onClick()}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element
};

Button.defaultProps = {
    text: '',
    className: '',
    onClick: () => {},
    icon: null
};
