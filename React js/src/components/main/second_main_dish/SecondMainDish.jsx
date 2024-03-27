import React, { useState, useEffect } from 'react';

import second_main from '../../../assets/second_main.png'

import classes from './second_main_dish.module.scss';

import { listData } from '../../../data/getSecondMainDish.js';
import Weight from '../../other/weight/Weight.jsx';
import Price from '../../other/price/Price.jsx';
import Name from '../../other/name/Name.jsx';
import Button from '../../other/main_buttons/Button.jsx';

export default function SecondMainDish() {
    const [secondMainDishInfo, setSecondMainDishInfo] = useState([]);

    useEffect(() => {
        listData().then((response) => {
            setSecondMainDishInfo(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
        {secondMainDishInfo.map((dishInfo, index) => (
        <div key={index} className={`${classes.second_main_dish_frame}`}>
            <img src={second_main} alt="" className={`${classes.picture}`}/>

            <Name text={dishInfo.name} left={'26px'} top={'258px'}></Name>

            <Weight text={dishInfo.weight} left={'26px'} top={'287px'}></Weight>

            <Price text={dishInfo.cost} left={'28px'} top={'330px'}></Price>
            
            <Button text={'Заказать'} left={'133px'} top={'323px'}></Button>
        </div>
            ))}
        
        </>
    );
}