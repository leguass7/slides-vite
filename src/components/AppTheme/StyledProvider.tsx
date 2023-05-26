import React from 'react'

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { ThemeProvider } from 'styled-components'

import { useAppTheme } from './useAppTheme'

export const StyledProvider: React.FC = ({ children }) => {
  const { theme } = useAppTheme()

  const themeMui = createTheme({
    palette: {
      mode: theme?.isDark ? 'dark' : 'light',
      primary: {
        main: theme.colors.primary
      },
      secondary: {
        main: theme.colors.secondary
      },
      background: { paper: theme.colors.primary }
    }
    // components: {

    // }
  })

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={themeMui}>{children}</MuiThemeProvider>
    </ThemeProvider>
  )
}
