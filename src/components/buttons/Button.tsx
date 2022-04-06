import ArrowForward from '@mui/icons-material/ArrowForward'
import { alpha } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import { useAppTheme, VariantColorsTypes } from '../AppTheme'

const Btn = styled.button<{ textColor: string; bgColor: string }>`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border: 0;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  padding: 8px 16px;
  font-size: 20px;
  gap: 16px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  &:hover {
    background-color: ${({ bgColor }) => alpha(bgColor, 0.7)};
  }
`

const icon = {
  ArrowForward
}

export type IconName = keyof typeof icon
// import { Container } from './styles';

type Props = {
  text: string
  onClick?: () => void
  iconName?: IconName
  themeColor?: VariantColorsTypes
}
export const Button: React.FC<Props> = ({ text, onClick, iconName, themeColor = 'secondary' }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const bgColor = theme.colors[themeColor]
  const textColor = matchingBackgroudText(themeColor)

  const renderIcon = () => {
    const Ico = iconName && icon[iconName]
    return Ico ? (
      <span>
        <Ico fontSize="large" />
      </span>
    ) : null
  }

  return (
    <Btn onClick={onClick} textColor={textColor} bgColor={bgColor}>
      {text}
      {renderIcon()}
    </Btn>
  )
}
