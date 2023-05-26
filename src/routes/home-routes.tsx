import { Wellcome } from '~/pages/sliders/Wellcome'
import React from 'react'

export type HomeRoute = {
  title: string
  Component: React.FC | null
}
export const homeRoutes: HomeRoute[] = [
  { title: 'Titulo 1', Component: Wellcome },
  { title: 'Titulo 2', Component: null },
  { title: 'Titulo 3', Component: null },
  { title: 'Titulo 4', Component: null },
  { title: 'Titulo 5', Component: null },
  { title: 'Titulo 6', Component: null }
]
