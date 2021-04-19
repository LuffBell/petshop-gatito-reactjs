import React from 'react'
import ImgContact from '../../assets/img/contact.jpg'
import { ContactContainer, ContactImage, ContactWrapper, ContactTitulo, ContactSubTitulo, ContactTel, ContactHorario } from './ContactElements'

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactImage src={ImgContact}/>
        <ContactWrapper>
          <ContactTitulo>Entre em contato!</ContactTitulo>
          <ContactSubTitulo>Será um prazer tirar suas dúvidas e atender seu pet</ContactSubTitulo>
          <ContactTel>Telefone: (xx) xxxx-xxxx</ContactTel>
          <ContactHorario>Horário de funcionamento: das 8h às 18h</ContactHorario>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default Contact
