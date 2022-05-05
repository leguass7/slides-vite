import React from 'react'

import { FocusBorder, Input, InputContainer } from './styles'

type Props = {
  effect: '9' | '8' | '7'
  placeholder?: string
  line?: number
  lineColor?: string
}

export const AnimatedInput: React.FC<Props> = ({
  line = 1,
  lineColor = '#0D7ECC',
  effect = '9',
  placeholder = 'text'
}) => {
  return (
    <InputContainer line={line} lineColor={lineColor}>
      <Input className={`effect-${effect}`} type="text" placeholder={placeholder} />
      <FocusBorder>
        <i />
      </FocusBorder>
    </InputContainer>
  )
}
