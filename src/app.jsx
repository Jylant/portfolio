import { signal, effect } from '@preact/signals'
import { h, Router } from 'preact-router'
import './app.css'
import { render } from 'preact'
import Home from './pages/home'
import Bio from './pages/bio'
import Portfolio from './pages/portfolio'

const App = () => (
  <Router>
    <Home path="/" />
    <Bio path="/bio" />
    <Portfolio path="/portfolio" />
  </Router>
);

render(<App />, document.body)