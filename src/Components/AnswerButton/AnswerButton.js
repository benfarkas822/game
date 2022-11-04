import React, {useState} from 'react';
import classes from './AnswerButton.module.scss';

const AnswerButton = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            className={isSelected ? classes['answer-button'] + ' ' + classes['selected'] + ' ' + classes[props.class] + ' kinect_fistclick' : classes['answer-button'] + ' ' + classes[props.class] + ' kinect_fistclick'}
            onClick={() => {
                props.click()
                setIsSelected(!isSelected)
            }}>
            {props.text}
        </div>
    );
};

export default AnswerButton;