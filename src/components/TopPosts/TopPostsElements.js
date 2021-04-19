import styled from 'styled-components'

export const TopPostsContainer = styled.div`
  width: 35%;

  border: var(--black-trans) solid 1px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`

export const TopPostsTitulo = styled.h2`
  text-align: center;

  color: var(--purple);

  padding: .5rem;
  margin: 1rem;

  background-color: var(--yellow);
`

export const TopPostsWrapper = styled.div`
  width: 85%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 0 auto;
`

export const TopPostsArticle = styled.article`
  display: flex;
  align-items: center;

  border-bottom: var(--black-trans) dashed 1px;
  
  padding: 1rem 0;

  &:last-child {
    margin-bottom: 1rem;
  }
`

export const TopPostsImage = styled.img`
  width: 40%;
  height: 100%;

  margin-right: 1rem;
`

export const TopPostsDescricao = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopPostsTituloPost = styled.h3`
  color: var(--purple);

  margin-bottom: .5rem;
`

export const TopPostsDate = styled.p`
  font-size: .9rem;
  font-style: italic;
`