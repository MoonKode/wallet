import { IconContext } from 'react-icons/lib';
import styled, { css } from 'styled-components';

interface IContainerProps {
    isOpen:boolean
}
interface IThemeToggleFooter {
    isOpen: boolean
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    padding-left: 20px;
    border-right: 1px solid ${(props) => props.theme.colors.gray};
    background-color: ${(props) => props.theme.colors.secondary};
    position: relative;
    @media(max-width: 600px){
        padding-left: 20px;
        position:fixed;
        z-index: 2;
        width: 170px;
        height: ${(props) => (props.isOpen ? '100vh' : '70px')};
        overflow: hidden;
        ${(props) => !props.isOpen && css`
            border: none;
            border-bottom: 1px solid ${props.theme.colors.gray};

        `};
    }
    `;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    `;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
    @media(max-width: 600px){
    display:none;
  
    };
`;

export const Title = styled.h3`
    margin-left:20px;
    color: ${(props) => props.theme.colors.white};
    @media(max-width: 600px){
        display:none;
    };
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction:column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    display:flex;
    align-items:center;
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    transition: opacity .5s;

    &:hover {
        opacity:.7;
    }
    >svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;
export const MenuItemButton = styled.button`
    font-size: 16px;
    border: none;
    background:none;
    display:flex;
    align-items:center;
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    transition: opacity .5s;

    &:hover {
        opacity:.7;
    }
    >svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;
export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    font-size: 22px;
    border-radius: 5px;
    background-color:${(props) => props.theme.colors.warning};
    color:${(props) => props.theme.colors.white};
    transition: opacity .3s;
    &:hover{
        opacity: 0.7;
    }
    display:none;
    justify-content: center;
    align-items: center;
    @media(max-width:600px){
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooter>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 470px){
        display:${(props) => (props.isOpen ? 'flex' : ' none')};
    }
`;
