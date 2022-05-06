import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{ spaced?: boolean }>`
  height: 100%;
  width: 100%;
  padding: ${({ spaced, theme }) => (spaced ? theme.spacing.xl : 0)}px;
`

type Props = {
  spaced?: boolean
}
export const PanelContainer: React.FC<Props> = ({ children, spaced }) => {
  return <Container spaced={spaced}>{children}</Container>
}
