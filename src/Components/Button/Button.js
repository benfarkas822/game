import React from 'react';
import classes from './Button.module.scss'

const Button = (props) => {
    return (
        <button
            className={classes[`button`] + ' w-fit kinect_fistareaclick ' + classes[`${props.class}`]}
            onClick={() => {
                if (props.click) props.click()
            }} disabled={props.disabled}>{props.text}</button>
    );
};

export default Button;