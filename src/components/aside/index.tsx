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
                <Title>Minhas Finanças</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/dashboard">
                <MdDashboard />
                    Gráficos
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward />
                    Ganhos
                </MenuItemLink>
                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward />
                    Despesas
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>
    )
}

export default Aside