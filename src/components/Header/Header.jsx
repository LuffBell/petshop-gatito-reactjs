import React, { useState } from 'react'
import { HeaderContainer } from './HeaderElements'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HeaderContainer>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
      </HeaderContainer>
    </>
  )
}

export default Header;