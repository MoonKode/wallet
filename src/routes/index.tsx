import React from 'react'
import App from './app.routes'
import { BrowserRouter } from 'react-router-dom'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default Routes