import { signal, effect } from '@preact/signals'

import { Router } from 'preact-router'
import './styles/app.css'
import { h, render } from 'preact'
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'

export const App = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <Portfolio path="/portfolio" />
  </Router>
);

