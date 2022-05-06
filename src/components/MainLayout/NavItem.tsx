import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  padding: 20px;
  margin: 20px;
`

type Props = {
  title: string
}

export const NavItem: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <ItemContainer className="neon">{title}</ItemContainer>
    </div>
  )
}
