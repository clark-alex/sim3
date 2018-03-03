import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import Private from './components/Private/Private'
import Profile from './components/Profile/Profile'

export default (
    <Switch>
        <Route path = '/' component = {Login} exact/>
        <Route path = '/private' component = {Private} />
        <Route path = '/profile' component = {Profile} />
    </Switch>
)