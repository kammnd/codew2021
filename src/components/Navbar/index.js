import React, {useState, useEffect} from 'react';
import { FaBars, FaGlobeAfrica } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavIcon
} from './NavbarElements';

import {LocaleContext} from '../../context/LocaleContext';
import { animateScroll } from 'react-scroll';

const Navbar = ({ toggle } ) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>codeW</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="schedule" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            Schedule</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sponsors" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            Sponsors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faq" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="ourteam" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            Our Team</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <LocaleContext.Consumer>
                        {localeVal => (
                            <NavIcon onClick={localeVal.changeLocale}> <FaGlobeAfrica /></NavIcon>
                        )}
                    </LocaleContext.Consumer>
                    {/* <NavBtnLink to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSf7-DIfW8sBtZiEogRiQ0VrzMVe4668JtHC6u1VM49nuR_peg/viewform?usp=sf_link" }} target="_blank"  >Register</NavBtnLink> */}
                    <NavBtnLink onClick={(e) => { e.preventDefault(); 
                    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSf7-DIfW8sBtZiEogRiQ0VrzMVe4668JtHC6u1VM49nuR_peg/viewform?usp=sf_link";}}>Register</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
