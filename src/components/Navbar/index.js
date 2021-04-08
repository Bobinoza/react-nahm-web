import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'; // 3:23:00 // Com o IconContext eu consigo moficar algumas coisas do Icon.
import { animateScroll as scroll } from 'react-scroll'; //3:27:10
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false); // 3:20:00

  const changeNav = () => { // 3:20:00
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav); // 3:22:00
  }, []);

  //Create function to go to TOP 3:26:00
  const toggleHome = () => {
    scroll.scrollToTop();
  };


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Housewives</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks  
                  to="/usersList"
                  onClick={toggleHome} 
                >
                  Encontrar Housewives
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/howWorks'
                >
                  Como funciona
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/wontToBe'
                >
                  Quero ser Housewives
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;