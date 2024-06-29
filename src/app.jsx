import { signal, effect } from '@preact/signals'

import { Router } from 'preact-router'
import './app.css'
import { h, render } from 'preact'
import Home from './pages/home'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio'
import Navbar from './components/ui/navbar.jsx'
import Footer from './components/ui/footer.jsx'


export const App = () => (
  <>
    <head>
      <title>My Portfolio</title>
    </head>
    <Navbar />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Portfolio path="/portfolio" />
    </Router>
    <Footer />
  </>
);
