import { signal, effect } from '@preact/signals'

import { Router } from 'preact-router'
import './app.css'
import { h, render } from 'preact'
import Home from './pages/home'
import About from './pages/About.jsx'
import Portfolio from './pages/portfolio'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/ui/navbar'
import { Footer } from './components/ui/footer'


export const App = () => (
  <BrowserRouter>
      <Navbar />
        <Switch>
          <Route>
            <Home path="/" />
          </Route>
          <Route>
            <About path="/about" />
          </Route>
          <Route>
            <Portfolio path="/portfolio" />
          </Route>
        </Switch>
      <Footer />
  </BrowserRouter>
);
