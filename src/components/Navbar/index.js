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
    NavIcon,
    Select,
    Span
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
                <NavLogo to="/" onClick={toggleHome}>code<span style={{color: "#FF6F60", fontFamily: 'Raleway'}}>W</span></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}
                        >
                            <TranslatableText
                                dictionary={{ english: "About", russian: "О нас", kazakh: "Марафон туралы" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="registration" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}
                        >
                        <TranslatableText
                                dictionary={{ english: "Registration", russian: "Регистрация", kazakh: "Тіркелу" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="schedule" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "Schedule", russian: "Расписание", kazakh: "Кесте" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sponsors" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "Sponsors", russian: "Спонсоры", kazakh: "Демеушілер" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faq" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "FAQ", russian: "Вопросы-Ответы", kazakh: "Сұрақ-Жауап" }}
                            />
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="ourteam" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80}>
                            <TranslatableText
                                dictionary={{ english: "Our Team", russian: "Наша Команда", kazakh: "Біздің Топ" }}
                            />
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <LanguageConsumer>
                        {({ updateLanguage }) => (
                                <Select onChange={updateLanguage}>
                                    <option value="english">EN</option>
                                    <option value="russian">RU</option>
                                    <option value="kazakh">KZ</option>
                                </Select>
                        )}
                </LanguageConsumer>
                <NavBtn>
                <NavBtnLink to={{
                    pathname: "https://docs.google.com/forms/d/e/1FAIpQLScz0OGyTUsl4jcnd23tT6BrMBlNQchdbF5_4RjYJWP6o-Dddw/viewform" }} target="_blank"  >
                    <TranslatableText
                                dictionary={{ english: "Register", russian: "Регистрируйся", kazakh: "Тiркел" }}
                    />
                </NavBtnLink>
                    {/* <NavBtnLink onClick={(e) => { e.preventDefault(); window.location.href="/";}}>Register</NavBtnLink> */}
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
