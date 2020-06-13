import React from 'react';

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=140x140`} />
    <h1> {props.monster.name} </h1>
    </div>
);