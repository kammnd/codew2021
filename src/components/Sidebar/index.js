import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute, 
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Registration
                    </SidebarLink>
                    <SidebarLink to="schedule" onClick={toggle}>
                        Schedule
                    </SidebarLink>
                    <SidebarLink to="sponsors" onClick={toggle}>
                        Sponsors
                    </SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to="ourteam" onClick={toggle}>
                        Our Team
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSf7-DIfW8sBtZiEogRiQ0VrzMVe4668JtHC6u1VM49nuR_peg/viewform?usp=sf_link" }} target="_blank" >Register</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
