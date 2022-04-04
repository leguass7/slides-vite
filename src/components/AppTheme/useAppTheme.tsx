import { useContext, useCallback } from 'react'

import { MatchingRules, TextColor, VariantColorsTypes } from './theme'
import { IThemeContext, ThemeContext } from './ThemeContext'

function findMatches(rules: MatchingRules, value: VariantColorsTypes, defaultValue = ''): string {
  const [themeColor] = rules.find(word => !!(word && word.slice(0, word.length - 1)?.includes(value)))?.slice(-1) || [
    defaultValue
  ]
  return themeColor
}

export interface IUseAppTheme extends Omit<IThemeContext, 'matchRules'> {
  matchingBackgroudText: (themeKeyColor?: VariantColorsTypes, defColor?: string) => string
}

export function useAppTheme(): IUseAppTheme {
  const { theme, isDark, matchRules, setTheme, setIsDark } = useContext(ThemeContext)

  /**
   * @function matchingBackgroudText
   * @description
   * Searches for the ideal color for the text matching the background color of the theme.
   * The rules are set in the `matchRules` constant
   * @example
   * matchingBackgroudText('primary') // return #ffffff
   */
  const matchingBackgroudText = useCallback(
    (themeKeyColor?: VariantColorsTypes, defColor?: TextColor) => {
      return themeKeyColor
        ? findMatches(matchRules, themeKeyColor, defColor || theme.colors.text)
        : defColor || theme.colors.text
    },
    [theme, matchRules]
  )

  return { theme, isDark, setIsDark, matchingBackgroudText, setTheme }
}
