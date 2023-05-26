import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { AppTheme } from '@/AppTheme'

import { PassRollProvider } from './components/PassRollLayout'
import { browserRouter } from './routes'

export const App: React.FC = () => {
  return (
    <AppTheme>
      <PassRollProvider>
        <RouterProvider router={browserRouter} />
      </PassRollProvider>
    </AppTheme>
  )
}

export default App
