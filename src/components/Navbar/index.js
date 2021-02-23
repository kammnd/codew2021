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

import LanguageConsumer from '../../context/LanguageConsumer';
import TranslatableText from '../../context/TranslatableText';
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
                        >
                            <TranslatableText
                                dictionary={{ english: "About", russian: "О нас", kazakh: "Turaly" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="registration" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}
                        >
                        <TranslatableText
                                dictionary={{ english: "Registration", russian: "Регистрация", kazakh: "Tırkeu" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="schedule" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "Schedule", russian: "Расписание", kazakh: "Keste" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sponsors" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "Sponsors", russian: "Спонсоры", kazakh: "Demeuşıler" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faq" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "FAQ", russian: "Частые вопросы", kazakh: "Jiı Sūraqtar" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="ourteam" smooth={true} duration={400}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "Our Team", russian: "Наша Команда", kazakh: "Bızdıŋ Komanda" }}
                            />
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <LanguageConsumer>
                        {({ updateLanguage }) => (
                                <select onChange={updateLanguage}>
                                    <option value="english">EN</option>
                                    <option value="russian">RU</option>
                                    <option value="kazakh">KZ</option>
                                </select>
                        )}
                        {/* <NavIcon onClick={localeVal.changeLocale}> <FaGlobeAfrica /></NavIcon> */}
                    </LanguageConsumer>
                    <NavBtnLink onClick={(e) => { e.preventDefault(); 
                    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSf7-DIfW8sBtZiEogRiQ0VrzMVe4668JtHC6u1VM49nuR_peg/viewform?usp=sf_link";}}>Register</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
