export const spacing = {
  s: 4,
  m: 6,
  l: 10,
  xl: 14
}

export const themeColors = {
  primary: '#0E2841',
  secondary: '#0D7ECC',
  contrast: '#BB1806',
  text: '#ffffff',
  white: '#FFFFFF',
  black: '#000000',
  border: '#ccc',
  shadow: '#C3C3C3',
  textDark: '#808080',
  background: '#243A5E'
}

export const appTheme = {
  colors: themeColors,
  spacing,
  rounded: 12,
  borderWidth: 1
}

export type IAppTheme = typeof appTheme
export type IThemeSpacing = typeof spacing
export type IThemeColors = typeof themeColors
export type VariantColorsTypes = keyof IThemeColors

export type TextColor = string

export type MatchingRules = [...VariantColorsTypes[], TextColor][]
