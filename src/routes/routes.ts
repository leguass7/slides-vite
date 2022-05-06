import { SlideInputs } from '~/pages/sliders/SlideInputs'
import { SlideRadar } from '~/pages/sliders/SlideRadar'
import { Wellcome } from '~/pages/sliders/Wellcome'

export const routes = [
  { title: 'Teste de Inputs', Component: SlideInputs },
  { title: 'Bem-vindo', Component: Wellcome },
  { title: 'Radar de competências', Component: SlideRadar }
  // { title: 'Titulo 4', Component: null },
  // { title: 'Titulo 5', Component: null },
  // { title: 'Titulo 6', Component: null }
] as const

export type IRoute = typeof routes[number]
