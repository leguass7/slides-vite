import cx from 'classnames'
import React from 'react'

import { FocusBorder, Input, InputContainer } from './styles'
export { FieldContainer } from './FieldContainer'

type Props = {
  effect: 'unique' | 'double' | 'middle'
  placeholder?: string
  line?: number
  lineColor?: string
  textColor?: string
  gap?: number
  light?: boolean
}

export const AnimatedInput: React.FC<Props> = ({
  line = 2,
  lineColor = '#0D7ECC',
  textColor,
  effect = 'unique',
  placeholder = 'text',
  gap,
  light
}) => {
  return (
    <InputContainer line={line} lineColor={lineColor} gap={gap} light={light} textColor={textColor}>
      <Input className={cx({ [effect]: true })} type="text" placeholder={placeholder} />
      <FocusBorder>
        <i />
      </FocusBorder>
    </InputContainer>
  )
}
