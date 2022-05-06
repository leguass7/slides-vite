import { tranparency } from '~/helpers/colors'
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

// export const InputBackground = styled.div<{ gap?: number }>`
//   position: absolute;
//   width: calc(100% - ${({ gap = 0 }) => gap * 2}px);
//   height: calc(100% - ${({ gap = 0 }) => gap * 2}px);
//   /* background-color: rgba(0, 0, 0, 0.2); */
//   z-index: -1;
// `

export const InputContainer = styled.div<{
  line?: number
  lineColor?: string
  offColor?: string
  gap?: number
  light?: boolean
  textColor?: string
}>`
  position: relative;
  padding: ${({ gap = 0 }) => gap}px;

  ${Input} {
    color: ${({ lineColor = '#000', textColor }) => textColor || lineColor};
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    border-width: ${({ gap, line }) => (gap ? line : line)}px;
    border-color: ${({ offColor, gap, light }) =>
      gap ? tranparency(!!light, 0.1) : offColor || tranparency(!!light, 0.2)};
    background-color: ${({ gap, light }) => (gap ? tranparency(!!light, 0.1) : 'transparent')};
  }
  ${Input}::placeholder {
    color: ${({ offColor, light }) => offColor || tranparency(!!light, 0.9)};
    font-weight: lighter;
    text-shadow: none;
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

  .middle ~ ${FocusBorder}:before, .middle ~ ${FocusBorder}:after {
    left: 50%;
    transition: 0.4s;
  }
  .middle ~ ${FocusBorder}:after {
    top: auto;
    bottom: 0;
  }
  .middle ~ ${FocusBorder} i:before,
  .middle ~ ${FocusBorder} i:after {
    top: 50%;
    left: 0;
    transition: 0.6s;
  }
  .middle ~ ${FocusBorder} i:after {
    left: auto;
    right: 0;
  }
  .middle:focus ~ ${FocusBorder}:before, .middle:focus ~ ${FocusBorder}:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .middle:focus ~ ${FocusBorder} i:before,
  .middle:focus ~ ${FocusBorder} i:after {
    top: 0;
    height: 100%;
    transition: 0.6s;
  }

  .double ~ ${FocusBorder}:before, .double ~ ${FocusBorder}:after {
    left: 0;
    transition: 0.3s;
  }
  .double ~ ${FocusBorder}:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .double ~ ${FocusBorder} i:before,
  .double ~ ${FocusBorder} i:after {
    top: 0;
    left: 0;
    transition: 0.4s;
  }
  .double ~ ${FocusBorder} i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .double:focus ~ ${FocusBorder}:before, .double:focus ~ ${FocusBorder}:after {
    width: 100%;
    transition: 0.3s;
  }
  .double:focus ~ ${FocusBorder} i:before,
  .double:focus ~ ${FocusBorder} i:after {
    height: 100%;
    transition: 0.4s;
  }

  .unique ~ ${FocusBorder}:before, .unique ~ ${FocusBorder}:after {
    right: 0;
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  .unique ~ ${FocusBorder}:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  .unique ~ ${FocusBorder} i:before,
  .unique ~ ${FocusBorder} i:after {
    top: 0;
    left: 0;
    transition: 0.2s;
  }
  .unique ~ ${FocusBorder} i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }

  .unique:focus ~ ${FocusBorder}:before, .unique:focus ~ ${FocusBorder}:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  .unique:focus ~ ${FocusBorder}:after {
    transition-delay: 0.2s;
  }
  .unique:focus ~ ${FocusBorder} i:before,
  .unique:focus ~ ${FocusBorder} i:after {
    height: 100%;
    transition: 0.2s;
  }
  .unique:focus ~ ${FocusBorder} i:after {
    transition-delay: 0.4s;
  }
`
