import basket from '../assets/basket.svg'
import logo from '../assets/logo.svg'
import profile from '../assets/profile.svg'
import search from '../assets/search.svg'
import fire from '../assets/fire.svg'
import chicken from '../assets/chicken.svg'
import ice_cream from '../assets/ice_cream.svg'

import '../styles/default.scss'
import '../styles/nav.scss'

import React, { useState } from 'react';

export default function Nav() {
    return (
<>          
    <nav className='navbar'>
        <div className='menubar'>
            <button className='logo_button'>
                <img src={logo} alt="" className='logo'/>
            </button>

            <ul className='food-list'>
            <div className='promotion'>
                <button>
                    <span className='nav_text'>АКЦИИ</span>
                    <img src={fire} alt="" className='promotion_fire'/>
                </button>
            </div>
            <div className='hot'>
                <button className='hot_text_button'>
                    <span className='nav_text'>ГОРЯЧЕЕ&nbsp;</span>
                    <img src={chicken} alt="" className='hot_chicken'></img>
                </button>
            </div>
            <div className='cold'>
                <button className='cold_text_button'>
                    <span className='nav_text'>ХОЛОДНОЕ&nbsp;</span>
                    <img src={ice_cream} alt="" className='cold_ice'/>
                </button>
            </div>
            <div className='fresh_bakery'>
                <button className='fresh_bakery_text_button'>
                    <p className='nav_text'>СВЕЖАЯ ВЫПЕЧКА</p>
                </button>
            </div>
            <div className='desserts'>
            <button className='desserts_text_button'>
                    <p className='nav_text'>ДЕСЕРТЫ</p>
                </button>
            </div>
            <div className='drinks'>
            <button className='drinks_text_button'>
                    <p className='nav_text'>НАПИТКИ</p>
                </button>
            </div>
            </ul>


            <button className='search_button'>
                <img src={search} alt=""/>
            </button>
            <button className='profile_button'>
                <img src={profile} alt=""/>
            </button>
            <button className='basket_button'>
                <img src={basket} alt=""/>
            </button>
        </div>
    </nav>
</>      
    )
}