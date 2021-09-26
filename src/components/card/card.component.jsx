/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='dev' src={`https://robohash.org/${props.dev.id}?set=set1&size=180x180`} />
            <a href={`https://www.google.com/search?q=${props.dev.name}`} target='_blank'>
                {props.dev.name}
            </a>
        <p>{props.dev.email}</p>
    </div>
)