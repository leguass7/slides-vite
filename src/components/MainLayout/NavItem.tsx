import React from 'react'
import styled from 'styled-components'

import { NeonContainer } from '../NeonContainer'

const ItemContainer = styled.div`
  padding: 20px;
  margin: 20px;
`

type Props = {
  title: string
}

export const NavItem: React.FC<Props> = ({ title }) => {
  return (
    <NeonContainer>
      <ItemContainer className="neon">{title}</ItemContainer>
    </NeonContainer>
  )
}
