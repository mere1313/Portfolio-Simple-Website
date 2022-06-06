
import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

import { Nav,
     NavbarContainer,
      NavLogo , 
      MobileIcon , 
      NavMenu , 
      NavLinks , 
      NavItem ,
    }  from './NavbarElements'

    const toggleHome = () => {
    scroll.scrollToTop();}

const Navbar = ({toggle}) => {
  return (
        <>
            <Nav>
            <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>MyPortfolio</NavLogo>
             <MobileIcon onClick ={toggle}>
                 <FaBars />
             </MobileIcon>
             <NavMenu>
                 <NavItem>
                     <NavLinks to='about'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact='true'
                     offset={-80}                
                     >About</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='discover'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}    
                     >Discover</NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Services</NavLinks>
                 </NavItem>
             </NavMenu>
            </NavbarContainer>
            </Nav>
        </>
  );
};

export default Navbar;