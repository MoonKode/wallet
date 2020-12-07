import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import {ThemeProvider} from 'styled-components'
import dark from './styles/themes/dark'
//import light from './styles/themes/light'
const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
        
    )
}

export default App;