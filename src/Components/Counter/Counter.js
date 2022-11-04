import React from 'react';
import classes from './Counter.module.scss';

const Counter = (props) => {
    return (
        <div className={classes['counter'] + ' fixed top-[5%] right-0 py-4 px-8 font-bold text-3xl '}>
            {props.children}
        </div>
    );
};

export default Counter;