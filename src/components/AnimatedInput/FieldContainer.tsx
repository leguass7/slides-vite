import React, { CSSProperties } from 'react'
import styled from 'styled-components'

const Container = styled.div<{ gap?: number }>`
  position: relative;
  padding: ${({ gap = 0 }) => gap}px;
`
// import { Container } from './styles';
type Props = {
  style?: CSSProperties
  gap?: number
}
export const FieldContainer: React.FC<Props> = ({ children, style, gap }) => {
  return (
    <Container style={style} gap={gap}>
      {children}
    </Container>
  )
}
