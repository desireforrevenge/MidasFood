import { useState } from 'react'

import './styles/default.scss'
import './styles/home.scss'
import Nav from './components/Nav'
import Description from './components/Description'
import Contacts from './components/Contacts'
import Rectangles from './components/Rectangles'
import Heading from './components/Heading'
import MainDish from './components/MainDish'




export default function App() {
  return (
    <>  
      <Nav></Nav>
      <Description></Description>
      <Contacts></Contacts>
      <Rectangles></Rectangles>
      <MainDish></MainDish>
      <Heading></Heading>
    </>
  )
}