import React from 'react';

const Items = (props) => {
    const dotStyle = {
        position: 'absolute',
        top: `${props.y}px`,
        left: `${props.x}px`,
    }
    return (
        <div className={'w-[150px] z-20'} id={props.id} style={dotStyle}>
            <img src={props.img} alt={props.id}/>
        </div>
    );
};

export default Items;