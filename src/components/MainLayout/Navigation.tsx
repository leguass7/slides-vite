import React from 'react'
import { uid } from 'react-uid'

import { homeRoutes } from '~/routes/routes'

import { NavItem } from './NavItem'
import { NavigationContainer } from './styles'

type Props = {
  // routes: IRoute[]
}
export const Navigation: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      {homeRoutes.map(route => {
        return <NavItem key={uid(route)}>{route.title}</NavItem>
      })}
    </NavigationContainer>
  )
}
