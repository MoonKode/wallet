import React from 'react'
import {
    Container,
    Header,
    LogoImg,
    MenuContainer,
    MenuItemLink,
    Title,

} from './styles'

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp,
} from 'react-icons/md'

import logoImg from '../../assets/logo.svg'
const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo MyWallet" />
                <Title>My Wallet</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='#'>
                <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowUpward />
                    Income
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowDownward />
                    OutGoings
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdExitToApp/>
                    Quit
                </MenuItemLink>

            </MenuContainer>
        </Container>
    )
}

export default Aside