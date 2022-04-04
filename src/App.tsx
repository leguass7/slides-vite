import React from 'react'

import { AppTheme } from '@/AppTheme'

import { PassRollProvider } from './components/PassRollLayout'
import { PageHome } from './pages/Home'

export const App: React.FC = () => {
  return (
    <AppTheme>
      <PassRollProvider>
        <PageHome />
      </PassRollProvider>
    </AppTheme>
  )
}

export default App
