import './components.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Activity (props) {
    const { activity } = props;

    const date = new Date(activity.updatedAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric'}
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <li>
            <p><span>{activity.user.username}</span> added <span>{activity.title.title}</span> to {activity.activityType} - {formattedDate}</p>
        </li>
    );
}

Activity.propTypes = {
    activity: PropTypes.object.isRequired
};

Activity.defaultProps = {
    activity: {}
};
