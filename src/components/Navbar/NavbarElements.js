import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
  height: 80px;

  display: flex;
  justify-content: center;
  align-itens: center;

  font-size: 1rem;

  margin-bottom: 2rem;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  
  height: 80px;
  width: 100%;
`

export const NavLogo = styled(Link)`
  cursor: pointer;
`

export const Logo = styled.img`
  width: 120px;
  height: 80px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);

    font-size: 1.8rem;

    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-itens: center;

  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;

  display: flex;
`

export const NavLinks = styled(Link)`
  color: #000000;

  display: flex;
  align-itens: center;

  padding: 1.5rem 1rem;

  cursor: pointer;

  font-size: 1.5rem;

  &:active {
    border-bottom: var(--grey) solid 3px;
  }

  &:last-child {
    padding-right: 0;
  }
`