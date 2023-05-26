import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'

type Props = {
  sideWidth: number
}

export const TopBar: React.FC<Props> = ({ sideWidth }) => {
  return (
    <AppBar color="primary" sx={{ paddingLeft: `${sideWidth}px` }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
