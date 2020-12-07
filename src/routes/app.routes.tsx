import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from '../components/layout'
import Dashboard from '../pages/Dashboard'
import List from '../pages/Lists'

const AppRoutes: React.FC = () => {

    return (
        <Layout>       
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/list/:type" exact component={List} />
            </Switch>
        </Layout>
    )
    
}

export default AppRoutes