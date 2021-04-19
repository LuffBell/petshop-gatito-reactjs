import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SideBarContainer = styled.aside`
  position: fixed;

  z-index: 999;

  width: 100%;
  height: 100%;

  background-color: var(--grey);

  display: grid;
  align-itens: center;
  top: 0;
  left: 0;

  transition: 0.3s ease-in-out;
  
  opacity: ${( {isOpen} ) => ( isOpen ? '100%' : '0' )};

  top: ${( {isOpen} ) => ( isOpen ? '0' : '-100%' )};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  background: transparent;

  font-size: 2rem;

  cursor: pointer;

  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: var(--white);
`

export const SideBarWrapper = styled.div`
  color: var(--grey-text);
`

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  align-itens: center;

  @media screen end (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SideBarLinks = styled(Link)`
  display: flex;
  align-itens: center;
  justify-content: center;

  font-size: 1.5rem;

  cursor: pointer;

  color: var(--white);

  padding-top: 30px;
`