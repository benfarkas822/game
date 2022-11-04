import React from 'react';
import classes from './Card.module.scss'

const Card = (props) => {
    return (
        <div className={'rounded-3xl w-fit cursor-pointer mx-auto ' + classes['card'] + ' ' + classes[props.class]}>
            {props.children}
        </div>
    );
};

export default Card;