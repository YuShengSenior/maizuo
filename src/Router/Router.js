import React from 'react'
import {HashRouter} from 'react-router-dom'
import {Redirect,Route} from 'react-router'
import App from '../App'
import Film from '../Views/Film/Film'
import Cinema from '../Views/Cinema/Cinema'
import Center from '../Views/Center/Center'
const route = <HashRouter>
    <App>
    <Route path='/film' component={Film}/>
    <Route path='/cinema' component={Cinema}/>
    <Route path='/center' component={Center}/>
    <Redirect from='/' to='/film' exact/>
    </App>
</HashRouter>
export default route