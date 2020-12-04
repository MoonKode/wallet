import React from 'react'
import { Container } from './styles'
import MainHeader from '../mainHeader'
import Aside from '../aside'
import Content from '../content'


const Layout: React.FC = () => {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Content />
        </Container>
    )
}

export default Layout