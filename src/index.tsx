/** @jsxImportSource @emotion/react */
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { CacheProvider } from '@emotion/react'
import { App } from 'src/core/app'
import { getCache } from 'src/libs/getCache'
import 'terminal.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <CacheProvider value={getCache()}>
      <BrowserRouter basename="/open-finance">
        <App />
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
