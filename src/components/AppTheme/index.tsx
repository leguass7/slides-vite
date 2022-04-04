import React from 'react'

import { AppThemeProvider } from './AppThemeProvider'
import GlobalStyle from './GlobalStyle'
import { StyledProvider } from './StyledProvider'

export { useAppTheme } from './useAppTheme'
export type { IAppTheme, IThemeColors, VariantColorsTypes, TextColor, MatchingRules } from './theme'

export const AppTheme: React.FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <StyledProvider>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </AppThemeProvider>
  )
}
