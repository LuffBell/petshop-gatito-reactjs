import React from 'react'
import { FooterContainer, FooterLogo, FooterCorp } from './FooterElements'
import LogoFooter from '../../assets/img/footer-logo.png'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo src={LogoFooter} alt="Logo rodapé"/>
        <FooterCorp>2021 Gatito Blog. All rights reserved.</FooterCorp>
      </FooterContainer>
    </>
  )
}

export default Footer
