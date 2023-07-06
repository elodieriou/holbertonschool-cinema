import './navigation.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';

export default function Sidebar () {

    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);

    const navigate = useNavigate();
    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(`/${pageName}`);
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:8000/api/activity', { headers: { 'Authorization': `Bearer ${accessToken}`} })
            .then((response) => setActivities(response.data))
            .catch((error) => console.log(error))
    }, [showActivities]);

    return (
        <React.Fragment>
            <nav className={small ? 'sidebar small' : 'sidebar'}
                 onMouseEnter={() => {
                     setSmall(!small);
                     setShowActivities(!showActivities);
                 }}
                 onMouseLeave={() => {
                     setSmall(!small);
                     setShowActivities(!showActivities);
                 }}
            >
                <div className={'navigation'}>
                    <ul className={'pages'}>
                        <li className={selected === 'home' ? 'active-item' : 'item'}
                            onClick={() => setPage('home')}>
                            <div>
                                <FontAwesomeIcon icon={faFolder} className={'icon-item'}/>
                                {!small && 'Home'}
                            </div>
                            {selected === 'home' && !small && <FontAwesomeIcon icon={faArrowRight}/>}
                        </li>
                        <li className={selected === 'favorites' ? 'active-item' : 'item'}
                            onClick={() => setPage('favorites')}>
                            <div>
                                <FontAwesomeIcon icon={faStar} className={'icon-item'}/>
                                {!small && 'Favorites'}
                            </div>
                            {selected === 'favorites' && !small && <FontAwesomeIcon icon={faArrowRight}/>}
                        </li>
                        <li className={selected === 'watchlater' ? 'active-item' : 'item'}
                            onClick={() => setPage('watchlater')}>
                            <div>
                                <FontAwesomeIcon icon={faClock} className={'icon-item'}/>
                                {!small && 'Watch Later'}
                            </div>
                            {selected === 'watchlater' && !small && <FontAwesomeIcon icon={faArrowRight}/>}
                        </li>
                    </ul>
                    {
                        showActivities &&
                        <div className={'activities latest'}>
                            <h3>Latest Activities</h3>
                            <ul>
                                { activities.slice(0, 10).map((activity) => (
                                    <Activity key={activity.id} activity={activity}/>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </React.Fragment>
    );
}
