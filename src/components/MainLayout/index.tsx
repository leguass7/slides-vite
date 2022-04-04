import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'

import { Navigation } from './Navigation'
import { Container, ASideContainer, MainContainer } from './styles'

export const MainLayout: React.FC = ({ children }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container sideWidth={280} isMobile={isMobile}>
      <ASideContainer />
      <MainContainer>{children}</MainContainer>
      <Navigation>bsadsdsds</Navigation>
    </Container>
  )
}
