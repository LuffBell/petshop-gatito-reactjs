import React from 'react'
import Dog from '../../assets/img/dog.jpg';
import { ArtigoHomeContainer, ArtigoHomeTitulo, ArtigoHomeDateContainer, ArtigoHomeDate, ArtigoHomeTags, ArtigoContainer, ArtigoHomeImagem, ArtigoHomeDescricao, ArtigoHomeLerMais, ArtigoWrapper, ArtigoHomeDono, ArtigoHomeComentario } from './ArtigoHomeElements';

const ArtigoHome = () => {
  return (
    <>
      <ArtigoHomeContainer>
        <ArtigoHomeTitulo>Cuidado com os animais durante a quarentena</ArtigoHomeTitulo>
        <ArtigoHomeDateContainer>
          <ArtigoHomeDate>20/08/2020</ArtigoHomeDate>
          <ArtigoHomeTags>Cães</ArtigoHomeTags>
        </ArtigoHomeDateContainer>
        <ArtigoContainer>
          <ArtigoHomeImagem src={Dog} alt="Foto cachorro"/>
          <ArtigoHomeDescricao>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor mi dignissim libero elementum, sit amet rutrum quam feugiat. Nunc leo eros, tempor vel erat vel, tempus vestibulum mauris. Vivamus quis porta odio.</ArtigoHomeDescricao>
          <ArtigoHomeLerMais>Ler mais</ArtigoHomeLerMais>
          <ArtigoWrapper>
            <ArtigoHomeDono>by Alura</ArtigoHomeDono>
            <ArtigoHomeComentario>2 comentários</ArtigoHomeComentario>
          </ArtigoWrapper>
        </ArtigoContainer>
      </ArtigoHomeContainer>
    </>
  )
}

export default ArtigoHome
