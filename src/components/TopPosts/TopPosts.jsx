import React from 'react'
import { TopPostsContainer, TopPostsTitulo, TopPostsWrapper, TopPostsArticle, TopPostsImage, TopPostsDescricao, TopPostsTituloPost, TopPostsDate } from './TopPostsElements'
import Foto1 from '../../assets/img/cat.jpg'
import Foto2 from '../../assets/img/pc.jpg'
import Foto3 from '../../assets/img/sun.jpg'

const TopPosts = () => {
  return (
    <>
      <TopPostsContainer>
        <TopPostsTitulo>Top Posts</TopPostsTitulo>
        <TopPostsWrapper>
          <TopPostsArticle>
            <TopPostsImage src={Foto1}/>
            <TopPostsDescricao>
              <TopPostsTituloPost>Adotar um gato: tudo o que você precisa saber</TopPostsTituloPost>
              <TopPostsDate>15/08/2020</TopPostsDate>
            </TopPostsDescricao>
          </TopPostsArticle>
          <TopPostsArticle>
            <TopPostsImage src={Foto2}/>
            <TopPostsDescricao>
              <TopPostsTituloPost>Cuidados com seu pet durante a pandemia</TopPostsTituloPost>
              <TopPostsDate>23/07/2020</TopPostsDate>
            </TopPostsDescricao>
          </TopPostsArticle>
          <TopPostsArticle>
            <TopPostsImage src={Foto3}/>
            <TopPostsDescricao>
              <TopPostsTituloPost>Lojas com acessórios para pets</TopPostsTituloPost>
              <TopPostsDate>05/07/2020</TopPostsDate>
            </TopPostsDescricao>
          </TopPostsArticle>
        </TopPostsWrapper>
      </TopPostsContainer>
    </>
  )
}

export default TopPosts
