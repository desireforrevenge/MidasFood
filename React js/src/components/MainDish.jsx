import React, { useState, useEffect } from 'react';

import '../styles/main_dish.scss';

import main from '../assets/main.png'

export default function MainDish() {
    return (
        <>
        <img src={main} alt="" className='main_dish_picture'/>
        </>
    );
}
