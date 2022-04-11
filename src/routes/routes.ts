import { SlideRadar } from '~/pages/sliders/SlideRadar'
import { Wellcome } from '~/pages/sliders/Wellcome'

export const routes = [
  { title: 'Titulo 1', Component: Wellcome },
  { title: 'Titulo 2', Component: SlideRadar },
  { title: 'Titulo 3', Component: null },
  { title: 'Titulo 4', Component: null },
  { title: 'Titulo 5', Component: null },
  { title: 'Titulo 6', Component: null }
] as const

export type IRoute = typeof routes[number]
