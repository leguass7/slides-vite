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
export const Container = styled.div<{ sideWidth?: number; isMobile?: boolean }>`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: hidden;

  ${ASideContainer} {
    padding-top: ${({ isMobile }) => (isMobile ? '56px' : '64px')};
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
    padding-top: ${({ isMobile }) => (isMobile ? '56px' : '64px')};
  }
`
