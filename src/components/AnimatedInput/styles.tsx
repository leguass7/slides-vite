import styled from 'styled-components'

export const Input = styled.input`
  color: #ffffff;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  background-color: transparent;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: solid;
  box-shadow: none;
  max-width: 100%;
  width: 100%;
  font-size: 14px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
`

export const FocusBorder = styled.span`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 2px;
    background-color: #ffffff;
  }
  &:after {
    top: auto;
  }
  i:before,
  i:after {
    content: '';
    position: absolute;
    height: 0;
  }
`

export const InputContainer = styled.div<{ line?: number; lineColor?: string; offColor?: string }>`
  position: relative;

  ${Input} {
    color: ${({ lineColor = '#000' }) => lineColor};
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
    border-color: ${({ offColor = 'rgba(255, 255, 255, 0.1)' }) => offColor};
  }
  ${Input}::placeholder {
    color: ${({ offColor = 'rgba(255, 255, 255, 0.3)' }) => offColor};
    font-weight: lighter;
  }

  ${FocusBorder}:before, ${FocusBorder}:after {
    background-color: ${({ lineColor = '#000' }) => lineColor};
    box-shadow: 0 0 3px ${({ lineColor = '#000' }) => lineColor};
    height: ${({ line = 2 }) => line}px;
  }

  ${FocusBorder} i:before, ${FocusBorder} i:after {
    width: ${({ line = 2 }) => line}px;
    background-color: ${({ lineColor = '#000' }) => lineColor};
    box-shadow: 0 0 5px ${({ lineColor = '#000' }) => lineColor};
  }

  .effect-7 ~ ${FocusBorder}:before, .effect-7 ~ ${FocusBorder}:after {
    left: 50%;
    transition: 0.4s;
  }
  .effect-7 ~ ${FocusBorder}:after {
    top: auto;
    bottom: 0;
  }
  .effect-7 ~ ${FocusBorder} i:before,
  .effect-7 ~ ${FocusBorder} i:after {
    top: 50%;
    left: 0;
    transition: 0.6s;
  }
  .effect-7 ~ ${FocusBorder} i:after {
    left: auto;
    right: 0;
  }
  .effect-7:focus ~ ${FocusBorder}:before, .effect-7:focus ~ ${FocusBorder}:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-7:focus ~ ${FocusBorder} i:before,
  .effect-7:focus ~ ${FocusBorder} i:after {
    top: 0;
    height: 100%;
    transition: 0.6s;
  }

  .effect-8 ~ ${FocusBorder}:before, .effect-8 ~ ${FocusBorder}:after {
    left: 0;
    transition: 0.3s;
  }
  .effect-8 ~ ${FocusBorder}:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .effect-8 ~ ${FocusBorder} i:before,
  .effect-8 ~ ${FocusBorder} i:after {
    top: 0;
    left: 0;
    transition: 0.4s;
  }
  .effect-8 ~ ${FocusBorder} i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-8:focus ~ ${FocusBorder}:before, .effect-8:focus ~ ${FocusBorder}:after {
    width: 100%;
    transition: 0.3s;
  }
  .effect-8:focus ~ ${FocusBorder} i:before,
  .effect-8:focus ~ ${FocusBorder} i:after {
    height: 100%;
    transition: 0.4s;
  }

  .effect-9 ~ ${FocusBorder}:before, .effect-9 ~ ${FocusBorder}:after {
    right: 0;
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
    top: 0;
    left: 0;
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
