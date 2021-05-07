import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import newIncident from './pages/NewIncident'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />
                <Route path="/register" component={ Register } />
                <Route path="/profile" component={ Profile } />
                <Route path="/new-incident" component={ newIncident } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
