import React, { useMemo } from 'react'

import { round } from '~/helpers/number'

import { SliderListContainer } from './styles'

type Props = {
  count: number
  indexSelected?: number
  mainWidth?: number
  timing: number
}

export const SliderList: React.FC<Props> = ({ children, mainWidth = 0, count, indexSelected = 1, timing }) => {
  const [position, listWith] = useMemo(() => {
    const w = round(count * mainWidth, 0)
    let c = indexSelected - 1
    if (indexSelected <= 0) c = 0
    if (indexSelected >= count) c = count - 1

    return [c * mainWidth * -1, w]
  }, [count, mainWidth, indexSelected])

  if (!mainWidth) return null

  return (
    <SliderListContainer style={{ width: listWith }} position={position} timing={timing}>
      {children}
    </SliderListContainer>
  )
}
