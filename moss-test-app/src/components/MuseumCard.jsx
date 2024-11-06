import React from 'react';
import { NavLink } from 'react-router-dom';
import './MuseumCard.css';

export default function MuseumCard(props) {
    const cardStyle = {
        backgroundColor: props.name === 'Dorf Møllegård' ? '#E3DB93' : '#EDC8AF'
    };

    return (
        <div className="museum-card" style={cardStyle}>
            <img className="card-image" src={props.image} alt={`${props.name} overview`} />
            <h2 className="card-title">{props.name}</h2>
            <h3 className="card-subtitle">Kommende aktiviteter:</h3>
            <ul className='activities-list'>
                {props.activities.map(activity => (
                    <li key={activity.id}>
                        <NavLink to={`/${props.slug}/aktiviteter/${activity.id}`}>
                            {activity.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            <NavLink to={`/${props.slug}/aktiviteter`} className="btn-activities">
                Se alle aktiviteter
            </NavLink>
        </div>
    );
}
