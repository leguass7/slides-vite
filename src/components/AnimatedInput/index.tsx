import React from 'react'
import styled, { css } from 'styled-components'

const FocusBorder = styled.span`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 2px;
    background-color: #ff00ff;
  }
  &:after {
    top: auto;
  }
`

const Input = styled.input<{ effect: string }>`
  color: #ffffff;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: solid;
  box-shadow: none;
  max-width: 100%;
  width: 100%;
`

const InputContainer = styled.div`
  position: relative;

  .effect-9 ~ ${FocusBorder}:before, .effect-9 ~ ${FocusBorder}:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #ff00ff;
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  .effect-9 ~ ${FocusBorder}:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  .effect-9 ~ ${FocusBorder} i:before,
  .effect-9 ~ ${FocusBorder} i:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #ff00ff;
    transition: 0.2s;
  }
  .effect-9 ~ ${FocusBorder} i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }

  .effect-9:focus ~ ${FocusBorder}:before, .effect-9:focus ~ ${FocusBorder}:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  .effect-9:focus ~ ${FocusBorder}:after {
    transition-delay: 0.2s;
  }
  .effect-9:focus ~ ${FocusBorder} i:before,
  .effect-9:focus ~ ${FocusBorder} i:after {
    height: 100%;
    transition: 0.2s;
  }
  .effect-9:focus ~ ${FocusBorder} i:after {
    transition-delay: 0.4s;
  }
`

type Props = {
  effect: '9' | '8'
}

export const AnimatedInput: React.FC<Props> = ({ effect = '9' }) => {
  return (
    <InputContainer>
      <Input effect={effect} className={`effect-${effect}`} type="text" placeholder="Placeholder Text" />
      <FocusBorder>
        <i />
      </FocusBorder>
    </InputContainer>
  )
}
