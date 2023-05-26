import React, { CSSProperties, useEffect, useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector'

import type { ISliderDimensions } from '../PassRollProvider'
import { SliderItemContainer } from './styles'

export type SliderItemProps = {
  style?: CSSProperties
  onLayout?: (dimensions?: ISliderDimensions, ref?: HTMLDivElement | null) => void
}

export const SliderItem: React.FC<SliderItemProps> = ({ children, onLayout, style }) => {
  const refReg = useRef(false)
  const { ref, width, height } = useResizeDetector<HTMLDivElement>()

  useEffect(() => {
    if (!refReg.current) {
      if ((ref.current && width) || height) {
        refReg.current = true
        if (onLayout && typeof onLayout === 'function') onLayout({ width, height }, ref?.current)
      }
    }
  }, [ref, width, height, onLayout])

  return (
    <SliderItemContainer ref={ref} style={style}>
      {children}
    </SliderItemContainer>
  )
}
