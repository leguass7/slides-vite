import React from 'react'
import { uid } from 'react-uid'

import { Drawer } from '@mui/material'

import { homeRoutes } from '~/pages/PageHome/sliders/routes'

import { useAppTheme } from '../AppTheme'
import { NavItem } from './NavItem'

type Props = {
  width?: number
}
export const Navigation: React.FC<Props> = ({ width }) => {
  const { theme } = useAppTheme()
  return (
    <Drawer
      open={true}
      variant="permanent"
      sx={{ backgroundColor: 'transparent' }}
      PaperProps={{
        sx: {
          backgroundColor: theme.colors.background,
          backgroundImage: 'none',
          width: `${width}px`,
          boxShadow:
            '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)'
        }
      }}
    >
      {homeRoutes.map(route => {
        return <NavItem key={uid(route)}>{route.title}</NavItem>
      })}
    </Drawer>
  )
}
