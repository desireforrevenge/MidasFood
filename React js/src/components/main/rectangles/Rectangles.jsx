import React, { useState, useEffect } from 'react';

import classes from './rectangles.module.scss';

import rectangle_left from '../../../assets/rectangle_left.svg';
import rectangle_right from '../../../assets/rectangle_right.svg';

export default function Rectangles() {

    return (
        <>
            <img src={rectangle_left} alt="" className={`${classes.rectangle_left}`}></img>
            <img src={rectangle_right} alt="" className={`${classes.rectangle_right}`}></img>
        </>
    );
}
