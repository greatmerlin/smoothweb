import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = ({toggle}) => {

  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])
  
  return (
    <>
    <IconContext.Provider value={ {color: '#01bf71'}}>
      <Nav scrollNav={scrollNav} >
        <NavbarContainer>
          <NavLogo to="/">MemoryUP</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="memocoin">Memo Coin</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tutorial">How to play</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn to="/signin">
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
