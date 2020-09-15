import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


import {
  Home,
  Hero
} from './pages'

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}