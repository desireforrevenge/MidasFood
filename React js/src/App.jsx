import { useState } from 'react'

import './styles/default.scss'
import './styles/home.scss'
import Nav from './components/main/nav/Nav'
import Description from './components/main/description/Description'
import Contacts from './components/main/contacts/Contacts'
import Rectangles from './components/main/rectangles/Rectangles'
import Heading from './components/main/heading/Heading'
import MainDish from './components/main/main_dish/MainDish'
import SecondMainDish from './components/main/second_main_dish/SecondMainDish'




export default function App() {
  return (
    <>  
      <Nav></Nav>
      <Description></Description>
      <Contacts></Contacts>
      <Rectangles></Rectangles>
      <MainDish></MainDish>
      <SecondMainDish></SecondMainDish>
      <Heading></Heading>
    </>
  )
}