import React, { useState, useEffect } from 'react';

// import Button from '@mui/material/Button'

import '../styles/main_dish.scss';

import main from '../assets/main.png'
import main_1024px from '../assets/main_1024px.png'
import main_768px from '../assets/main_768px.png'

import frame_background_main from '../assets/frame_background_main.svg'
import frame_background_right from '../assets/frame_background_right.svg'
import frame_background_left from '../assets/frame_background_left.svg'
import frame_background_up from '../assets/frame_background_up.svg'
import frame_background_down from '../assets/frame_background_down.svg'

import { listData } from '../data/getMainDish.js';



export default function MainDish() {
    const [mainDishInfo, setMainDishInfo] = useState([]);

    useEffect(() => {
        listData().then((response) => {
            setMainDishInfo(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);


    return (
        <>
        <img src={main} alt="" className='main_dish_picture'/>
        <img src={main_1024px} alt="" className='main_dish_picture_1024px'/>
        <img src={main_768px} alt="" className='main_dish_picture_768px'/>

        {mainDishInfo.map((dishInfo, index) => (
        <div className='main_dish_frame'>
            <p className='name'>
                {dishInfo.name}
            </p>

            <div className='weight_frame'>
                <p className='weight'>
                    {dishInfo.weight} г
                </p>
            </div>

            <p className='description'>
                {dishInfo.description}
            </p>

            <p className='price'>
                {dishInfo.cost} ₽
            </p>

            <button className='to_basket_button'>
                <div className='to_basket_button_styles'>
                    <span className='to_basket_button_text'>В корзину</span>
                </div>
            </button>


            <img src={frame_background_main} alt="" className='frame_background_main'/>
            <img src={frame_background_right} alt="" className='frame_background_right'/>
            <img src={frame_background_left} alt="" className='frame_background_left'/>
            <img src={frame_background_up} alt="" className='frame_background_up'/>
            <img src={frame_background_down} alt="" className='frame_background_down'/>
        </div>
            ))}
        
        </>
    );
}
