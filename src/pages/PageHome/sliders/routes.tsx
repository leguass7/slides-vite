import React from 'react'

import { Wellcome } from '~/pages/PageHome/sliders/Wellcome'

export type HomeRoute = {
  title: string
  Component: React.FC | null
}
export const homeRoutes: HomeRoute[] = [
  { title: 'Titulo 1', Component: Wellcome },
  { title: 'Titulo 2', Component: Wellcome },
  { title: 'Titulo 3', Component: Wellcome },
  { title: 'Titulo 4', Component: Wellcome },
  { title: 'Titulo 5', Component: Wellcome },
  { title: 'Titulo 6', Component: Wellcome }
]
