import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;

  width: 1100px;

  margin: 0 auto;

  box-sizing: border-box;

  border: var(--black-trans) solid 1px;
  border-radius: 0 5px 5px 0;
`

export const ContactImage = styled.img`
  width: 50%;
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;

  padding: 1rem;
`

export const ContactTitulo = styled.h2`
  font-size: 2rem;

  padding: 1rem;
`

export const ContactSubTitulo = styled.h3`
  font-size: 1.5rem;
  
  padding: .5rem;
`

export const ContactTel = styled.address`
  font-style: italic;

  margin: 1rem;
`

export const ContactHorario = styled.p`
  font-size: .8rem;
`