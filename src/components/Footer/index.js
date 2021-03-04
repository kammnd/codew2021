import React from 'react'
import { FaEnvelope, FaInstagram, FaTelegram } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer= () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            code<span style={{color: "#FF6F60", fontFamily: 'Raleway'}}>W</span>
                        </SocialLogo>
                        <WebsiteRights href="https://github.com/kammnd/codew2021" target="_blank">Source Code & Credits</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://t.me/nu_acm_w" target="_blank" aria-label="Telegram">
                                <FaTelegram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/acmsc_nu/?hl=en" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://mail.google.com/mail/?view=cm&fs=1&to=acmsc@nu.edu.kz&su=SUBJECT&body=BODY" target="_blank" aria-label="Email">
                                <FaEnvelope/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
