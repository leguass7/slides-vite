import React from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '~/components/CompanyLayout'
import { SingleLayout } from '~/components/SingleLayout'
import { PageHome } from '~/pages/PageHome'
import { PageLogout } from '~/pages/PageLogout'
import { PageSigin } from '~/pages/PageSigin'

const elements: RouteObject[] = [
  {
    element: <SingleLayout />,
    children: [
      { path: '/', index: true, element: <PageSigin /> },
      { path: '/logout', element: <PageLogout /> }
    ]
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/company', element: <PageHome /> },
      { path: '/company/teste', element: <PageHome /> }
    ]
  }
]

export const browserRouter = createBrowserRouter(elements)
