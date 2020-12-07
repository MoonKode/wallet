import React from 'react'
import { Container } from './styles'
import MainHeader from '../mainHeader'
import Aside from '../aside'
import Content from '../content'


const Layout: React.FC = ({children}) => {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Layout