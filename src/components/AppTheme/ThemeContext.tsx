import { createContext, Dispatch, SetStateAction } from 'react'

import { IAppTheme, MatchingRules } from './theme'

export interface IThemeContext {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
  theme: IAppTheme
  setTheme: Dispatch<SetStateAction<IAppTheme>>
  matchRules: MatchingRules
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export { ThemeContext }
