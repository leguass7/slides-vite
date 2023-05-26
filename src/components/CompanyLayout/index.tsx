import React from 'react'
import { Outlet } from 'react-router-dom'

import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import { TopBar } from '@/TopBar'

import { Navigation } from './Navigation'
import { Container, ASideContainer, MainContainer } from './styles'

export const MainLayout: React.FC = () => {
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))

  return (
    <Container sideWidth={280} isMobile={isMobile}>
      <ASideContainer>ASideContainer aaa</ASideContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Navigation width={280} />
      <TopBar sideWidth={280} />
    </Container>
  )
}
