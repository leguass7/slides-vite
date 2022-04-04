import React, { useState, useMemo } from 'react'

import { appTheme, IAppTheme, MatchingRules } from './theme'
import { ThemeContext } from './ThemeContext'

export type ThemeProviderProps = {
  theme?: IAppTheme
}

export const AppThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme: themeConfig }) => {
  const [isDark, setIsDark] = useState(false)

  const localTheme = useMemo(() => {
    if (themeConfig) return themeConfig
    return themeConfig || appTheme
  }, [themeConfig])

  const [theme, setTheme] = useState(localTheme)

  // @ts-ignore
  const matchRules: MatchingRules = useMemo(
    () => [
      ['primary', 'secondary', 'contrast', 'black', theme.colors.white],
      ['white', theme.colors.primary],
      ['border', theme.colors.black]
    ],
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, theme: localTheme, setTheme, matchRules }}>
      {children}
    </ThemeContext.Provider>
  )
}
