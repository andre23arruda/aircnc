import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewSpot from './pages/NewSpot'
import Bookings from './pages/Bookings'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/new-spot" component={ NewSpot } />
                <Route path="/bookings" component={ Bookings } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
