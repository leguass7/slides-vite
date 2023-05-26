import type { Dispatch, SetStateAction, Context } from 'react'

import { createContext } from 'use-context-selector'

import type { IAppTheme, MatchingRules } from './theme'

export interface IThemeContext {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
  theme: IAppTheme
  setTheme: Dispatch<SetStateAction<IAppTheme>>
  matchRules: MatchingRules
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext) as Context<IThemeContext>

export { ThemeContext }
