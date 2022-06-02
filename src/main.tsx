import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
// import PrimeraApp from './App'
import './index.css'
const container = document.getElementById('root')
ReactDOM.createRoot(container!).render(
  <React.StrictMode>
    <CounterApp value={0}></CounterApp>
  </React.StrictMode>
)
