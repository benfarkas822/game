import React from 'react';
import classes from './Banner.module.scss'

const Banner = (props) => {
    return (
        <div className={classes['banner'] + ' ' + classes[props.color]}>
            {props.children}
        </div>
    );
};

export default Banner;