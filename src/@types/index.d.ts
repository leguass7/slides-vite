import { IAppTheme } from '~/components/AppTheme/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends IAppTheme {}
}
