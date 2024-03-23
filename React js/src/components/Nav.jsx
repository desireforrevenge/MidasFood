import logo from '../assets/logo.svg'
import fire from '../assets/fire.svg'
import chicken from '../assets/chicken.svg'
import ice_cream from '../assets/ice_cream.svg'
import mobile_menu from '../assets/mobile_menu.svg'

import '../styles/default.scss'
import '../styles/nav.scss'

import React, { useState, useEffect } from 'react';

export default function Nav() {
    
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
<>          
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='menubar'>
        <button className='logo_button'>
            <img src={logo} alt="" className='logo'/>
        </button>

        <button className='mobile_menu_button'>
            <img src={mobile_menu} alt="" />
            <span className='mobile_menu_button_text'>МЕНЮ</span>
        </button>

        <ul className='food-list'>
        <div className='promotion'>
            <button>
                <span className='nav_text'>АКЦИИ</span>
                <img src={fire} alt="" className={scrolled ? 'promotion_fire_scrolled' : 'promotion_fire'}/>
            </button>
        </div>
        <div className='hot'>
            <button className='hot_text_button'>
                <span className='nav_text'>ГОРЯЧЕЕ&nbsp;</span>
                <img src={chicken} alt="" className={scrolled ? 'hot_chicken_scrolled' : 'hot_chicken'}></img>
            </button>
        </div>
        <div className='cold'>
            <button className='cold_text_button'>
                <span className='nav_text'>ХОЛОДНОЕ&nbsp;</span>
                <img src={ice_cream} alt="" className={scrolled ? 'cold_ice_scrolled' : 'cold_ice'}/>
            </button>
        </div>
        <div className='fresh_bakery'>
            <button className='fresh_bakery_text_button'>
                <span className='nav_text'>СВЕЖАЯ ВЫПЕЧКА</span>
            </button>
        </div>
        <div className='desserts'>
        <button className='desserts_text_button'>
                <span className='nav_text'>ДЕСЕРТЫ</span>
            </button>
        </div>
        <div className='drinks'>
        <button className='drinks_text_button'>
                <span className='nav_text'>НАПИТКИ</span>
            </button>
        </div>
        </ul>

        <button className='search_button'>
            <svg width="28.000000" height="28.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path d="M14.74 16.26C13.19 17.48 11.23 18.21 9.1 18.21C4.07 18.21 0 14.14 0 9.1C0 4.07 4.07 0 9.1 0C14.14 0 18.21 4.07 18.21 9.1C18.21 11.23 17.48 13.19 16.26 14.74L24 22.48L22.48 24L14.74 16.26ZM16.07 9.1C16.07 12.95 12.95 16.07 9.1 16.07C5.26 16.07 2.14 12.95 2.14 9.1C2.14 5.26 5.26 2.14 9.1 2.14C12.95 2.14 16.07 5.26 16.07 9.1Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
            </svg>
        </button>
        <button className='profile_button'>
            <svg width="16.000000" height="34.000000" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path d="M2.93 4.64C2.93 7.19 4.98 9.28 7.5 9.28C10.04 9.28 12.06 7.19 12.06 4.64C12.06 2.08 10.01 0 7.5 0C4.98 0 2.96 2.08 2.93 4.64ZM4.98 4.64C4.98 3.22 6.1 2.08 7.5 2.08C8.89 2.08 10.01 3.22 10.01 4.64C10.01 6.05 8.89 7.19 7.5 7.19C6.1 7.19 4.98 6.05 4.98 4.64ZM12.97 18.25L12.97 24L15 24L15 18.25C15 14.04 11.64 10.63 7.5 10.63C3.35 10.63 0 14.04 0 18.25L0 24L2.08 24L2.08 18.25C2.08 15.21 4.5 12.72 7.53 12.72C10.52 12.72 12.97 15.18 12.97 18.25Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
            </svg>
        </button>
        <button className='basket_button'>
            <svg width="27.000000" height="35.000000" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path d="M1.63 13.81L4.44 25L22.52 25L25.33 13.81L26.96 13.81L26.96 7.5L20.74 7.5L17.68 0L15.93 0.68L18.68 7.53L8.25 7.53L11.03 0.68L9.28 0L6.22 7.5L0 7.5L0 13.81L1.63 13.81ZM25.09 9.4L25.09 11.98L1.9 11.98L1.9 9.4L25.09 9.4ZM23.43 13.84L21.07 23.16L5.92 23.16L3.56 13.84L23.43 13.84ZM8.91 15.39L10.82 15.39L10.82 22.06L8.91 22.06L8.91 15.39ZM12.54 15.39L14.45 15.39L14.45 22.06L12.54 22.06L12.54 15.39ZM18.08 15.39L16.17 15.39L16.17 22.06L18.08 22.06L18.08 15.39Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
            </svg>
        </button>
    </div>
    </nav>
</>
    )
}