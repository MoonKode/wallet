import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    padding-left: 20px;
    border-right: 1px solid ${(props) => props.theme.colors.gray};
    background-color: ${(props) => props.theme.colors.secondary};
    `;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    `;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const Title = styled.h3`
margin-left:20px;
    color: ${(props) => props.theme.colors.white};
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
