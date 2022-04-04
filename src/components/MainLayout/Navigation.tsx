import { routes } from '~/routes/routes'
import React from 'react'

import { NavItem } from './NavItem'
import { NavigationContainer } from './styles'

type Props = {
  // routes: IRoute[]
}
export const Navigation: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      {routes.map(route => {
        return <NavItem key={route.title}>{route.title}</NavItem>
      })}
    </NavigationContainer>
  )
}
