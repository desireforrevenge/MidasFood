import React, { useState, useEffect } from 'react';

import classes from './button.module.scss';

export default function Button({ text, left, top}) {
    const elementPosition = {
        left: left,
        top: top,
    };

    const [isClicked, setIsClicked] = useState(false);
    const [isAnimationFinished, setIsAnimationFinished] = useState(true);

    const handleClick = () => {
        console.log('button clicked')

        setIsClicked(true);
        setIsAnimationFinished(false);
        setTimeout(() => {
            setIsClicked(false);
            setTimeout(() => {
                setIsAnimationFinished(true);
            }, 100);
        }, 500);
    };

    return (
        <>
            <button className={`${classes.button}`} onClick={handleClick}>
                <div className={`${classes.button_styles} ${isClicked ? classes.onClick : ''}   ${!isAnimationFinished ? classes.animationInProgress : ''}`}  style={elementPosition}>
                    {text}
                </div>
            </button>
        </>
    );
}
