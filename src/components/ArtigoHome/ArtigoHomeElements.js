import styled from "styled-components";

export const ArtigoHomeContainer = styled.article`
  width: 60%;
  height: 70%;

  background-color: var(--black-trans);

  display: flex;
  flex-direction: column;
  align-itens: center;
`

export const ArtigoHomeTitulo = styled.h2`
  font-size: 1.5rem;

  color: #000000;
  
  text-align: center;

  padding: 1rem;
`

export const ArtigoHomeDateContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 1rem;
`

export const ArtigoHomeDate = styled.p`
  font-size: .9rem;
  font-style: italic;

  color: var(--grey-text);

  padding: .5rem;
`

export const ArtigoHomeTags = styled.p`
  color: purple;

  border: purple solid 1px;

  padding: .5rem;
`

export const ArtigoContainer = styled.article`
  width: 100%;
  height: 100%;

  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-itens: center;

  border: var(--black-trans) solid 1px;

  box-sizing: border-box;
`

export const ArtigoHomeImagem = styled.img`
  width: 100%;
  height: 60%;
`

export const ArtigoHomeDescricao = styled.p`
  margin: 2rem 3rem 1rem 3rem;
`

export const ArtigoHomeLerMais = styled.button`
  width: 20%;

  border: none;

  padding: .5rem 1rem;
  margin: 0 auto 1rem auto;

  background-color: var(--yellow);

  color: var(--purple);

  transition: 0.5s;

  cursor: pointer;

  &:hover {
    background-color: var(--purple);

    color: var(--yellow);
  }
`

export const ArtigoWrapper = styled.div`
  display: flex;
  align-itens: center;
`

export const ArtigoHomeDono = styled.p`
  font-size: .9rem;
  font-style: italic;

  width: 50%;

  text-align: center;

  padding: 1rem 0;

  border: var(--black-trans) solid 1px;
`

export const ArtigoHomeComentario = styled.p`
  font-size: .9rem;
  font-style: italic;

  width: 50%;

  text-align: center;

  padding: 1rem 0;

  border: var(--black-trans) solid 1px;

  cursor: pointer;
`
