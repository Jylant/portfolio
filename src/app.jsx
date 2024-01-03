import { signal, effect } from '@preact/signals'

import { Router } from 'preact-router'
import './styles/app.css'
import { h, render } from 'preact'
import Home from './pages/home'
import Bio from './pages/bio'
import Portfolio from './pages/portfolio'

export const App = () => (
  <Router>
    <Home path="/" />
    <Bio path="/bio" />
    <Portfolio path="/portfolio" />
  </Router>
);
