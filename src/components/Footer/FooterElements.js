import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  padding: 1rem 0 .5rem 0;
  margin-top: 2rem;

  border-top: var(--black-trans) solid 1px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterLogo = styled.img`
  width: 60px;
  height: 50px;
`

export const FooterCorp = styled.p`
  margin-left: 1rem;

  font-size: .9rem;
  
  color: var(--grey-text);
`