import React from 'react'

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { ThemeProvider } from 'styled-components'

import { useAppTheme } from './useAppTheme'

export const StyledProvider: React.FC = ({ children }) => {
  const { theme } = useAppTheme()

  const themeMui = createTheme({
    palette: {
      primary: {
        main: theme.colors.primary
      },
      secondary: {
        main: theme.colors.secondary
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={themeMui}>{children}</MuiThemeProvider>
    </ThemeProvider>
  )
}
