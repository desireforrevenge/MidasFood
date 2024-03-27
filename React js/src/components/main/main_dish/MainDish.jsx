import React, { useState, useEffect } from 'react';

import classes from './main_dish.module.scss';

import main from '../../../assets/main.png'
import main_1024px from '../../../assets/main_1024px.png'
import main_768px from '../../../assets/main_768px.png'

import frame_background_main from '../../../assets/frame_background_main.svg'
import frame_background_right from '../../../assets/frame_background_right.svg'
import frame_background_left from '../../../assets/frame_background_left.svg'
import frame_background_up from '../../../assets/frame_background_up.svg'
import frame_background_down from '../../../assets/frame_background_down.svg'

import { listData } from '../../../data/getMainDish.js';
import Weight from '../../other/weight/Weight.jsx';
import Price from '../../other/price/Price.jsx';
import Name from '../../other/name/Name.jsx';
import Description from '../../other/description/Description.jsx'
import Button from '../../other/main_buttons/Button.jsx';



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
        <img src={main} alt="" className={`${classes.main_dish_picture}`}/>
        <img src={main_1024px} alt="" className={`${classes.main_dish_picture_1024px}`}/>
        <img src={main_768px} alt="" className={`${classes.main_dish_picture_768px}`}/>

        {mainDishInfo.map((dishInfo, index) => (
        <div key={index} className={`${classes.main_dish_frame}`}>
            <Name text={dishInfo.name} left={'56px'} top={'37px'} font_size={'25px'} line_height={'30px'}></Name>

            <Weight text={dishInfo.weight} left={'55px'} top={'102px'}></Weight>

            <Description text={dishInfo.description} left={'56px'} top={'129px'} font_size={'15px'} line_height={'21px'}></Description>
        
            <Price text={dishInfo.cost} left={'56px'} top={'260px'}></Price>

            <Button text={'В корзину'} left={'161px'} top={'253px'}></Button>

            <img src={frame_background_main} alt="" className={`${classes.frame_background_main}`}/>
            <img src={frame_background_right} alt="" className={`${classes.frame_background_right}`}/>
            <img src={frame_background_left} alt="" className={`${classes.frame_background_left}`}/>
            <img src={frame_background_up} alt="" className={`${classes.frame_background_up}`}/>
            <img src={frame_background_down} alt="" className={`${classes.frame_background_down}`}/>
        </div>
            ))}
        
        </>
    );
}
