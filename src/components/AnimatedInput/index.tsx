import cx from 'classnames'
import React from 'react'

import { FocusBorder, Input, InputContainer } from './styles'
export { FieldContainer } from './FieldContainer'

type Props = {
  effect: 'unique' | 'double' | 'middle'
  placeholder?: string
  line?: number
  lineColor?: string
  gap?: number
  light?: boolean
}

export const AnimatedInput: React.FC<Props> = ({
  line = 1,
  lineColor = '#0D7ECC',
  effect = 'unique',
  placeholder = 'text',
  gap,
  light
}) => {
  return (
    <InputContainer line={line} lineColor={lineColor} gap={gap} light={light}>
      <Input className={cx({ [effect]: true })} type="text" placeholder={placeholder} />
      <FocusBorder>
        <i />
      </FocusBorder>
    </InputContainer>
  )
}
