import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 1100px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.625rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1100px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #ffffff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #FF6F60; //ff5349
    }
`;
export const NavIcon = styled.nav`
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
    margin-right: 15px;

    @media screen and (max-width: 1100px) { //768px
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    

    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FF6F60;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #010606;
    }
`;

export const Select = styled.select`
    display: flex;
    width: 65px;
    align-items: center;
    padding: 5px 5px 5px 5px;
    font-size: 16px;
    border: 1px solid #eee;
    height: 34px;
    background-color: transparent;
    border-radius: 8px;
    margin-top: 23px;
    margin-right: 15px;
    margin-left: 15px;
    color: #fff;
    outline: none;
    cursor:pointer;
    @media screen and (max-width: 1100px) {
        margin-right: 60px;
    }
`;