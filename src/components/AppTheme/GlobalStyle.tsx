import { soraCss } from '~/styles/fonts'
import { createGlobalStyle, css } from 'styled-components'

const rooCss = css`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  max-width: 100%;
  border: 0;
  min-height: 100vh;
  font-family: Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ${soraCss}
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    display: block;
    height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    border: 0;
    min-height: 100vh;
    position: relative;
    font-family: Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    ${rooCss}
  }
`
