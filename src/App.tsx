import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/layout'
import Dashboard from './pages/Dashboard'
import List from './pages/Lists'
import {ThemeProvider} from 'styled-components'
import dark from './styles/themes/dark'
//import light from './styles/themes/light'
const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
               <List />
            </Layout>
        </ThemeProvider>
        
    )
}

export default App;