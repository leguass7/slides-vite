import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import './assets/index.css'
import App from './App'

ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
