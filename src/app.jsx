import { signal, effect } from '@preact/signals'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Fragment } from 'preact'

export function App() {
  const [count, setCount] = signal(0)

  effect(() => {
    console.log(`Count is ${count()}`)
  })

  return (
    <Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount(count() + 1)}>
          count is {count()}
        </button>
      </div>
    </Fragment>
  )
}