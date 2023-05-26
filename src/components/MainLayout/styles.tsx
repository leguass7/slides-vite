import { alpha } from '@mui/material'

import styled, { css } from 'styled-components'

export const ASideContainer = styled.aside<{ isMobile?: boolean }>`
  position: relative;
  display: block;
`

export const MainContainer = styled.main<{ isMobile?: boolean }>`
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`

export const NavigationContainer = styled.div<{ isMobile?: boolean }>`
  position: fixed;
  top: 0px;
  left: 0;
  max-width: 280px;
  height: 100vh;
  max-height: 100%;
  background-color: ${() => alpha('#000', 0.2)};
  border-right: 1px solid ${() => alpha('#000', 0.2)};
  transition: all ease-in-out 0.3s;
`

export const Container = styled.div<{ sideWidth?: number; isMobile?: boolean }>`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${NavigationContainer} {
    width: ${({ sideWidth }) => sideWidth}px;

    ${({ isMobile }) =>
      isMobile
        ? css`
            transform: translateX(-100%);
          `
        : css`
            transform: translateX(0);
          `}
  }

  ${ASideContainer} {
    ${({ isMobile, sideWidth }) =>
      isMobile
        ? css`
            width: 0px;
          `
        : css`
            width: ${sideWidth}px;
          `}
  }

  ${MainContainer} {
    width: ${({ isMobile, sideWidth }) => (!isMobile ? `calc(100% - ${sideWidth}px)` : '100%')};
  }
`
