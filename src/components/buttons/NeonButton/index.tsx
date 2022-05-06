import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const lightAminamation = keyframes`
  /* 0% {
    transform: translate3d(-90%, -90%, 0);
  }
  50% {
    transform: translate3d(0%, 0%, 0);
  } 
  100% {
    transform: translate3d(90%, 90%, 0);
  }*/
  100% {
    transform: translate3d(50%, 50%, 0);
  }
`

const flex = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* width: 100%; */
  height: 100%;
`

const Container = styled.div`
  position: relative;
  background-color: #000;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.xl}px`};
  border: 1px solid #000;
  ${flex}

  filter: contrast(110%) brightness(190%);
  overflow: hidden;

  border-radius: 4px;
  margin: 2px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 0.1s;

  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    /* transform: translateY(-2px); */
    transform: scale(1.02);
  }
`

const Spotlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: 10;

  animation: ${lightAminamation} 5s infinite linear;
  background: radial-gradient(circle, white, transparent 25%) 0 0 / 25% 25%,
    radial-gradient(circle, white, black 25%) 50% 50% / 12.5% 12.5%,
    radial-gradient(circle, white, black 25%) 70% 70% / 50% 50%;
  /* background: radial-gradient(circle, white, transparent 25%) 0 0 / 25% 25%,
    radial-gradient(circle, white, black 25%) 70% 70% / 50% 50%; */
  top: -100%;
  left: -100%;

  /* background-size: 4px; */
  // Color dodge gives the lights that shimmer effect
  mix-blend-mode: color-dodge;
  border-radius: 4px;
`

const Gradient = styled.div<{ bgGradient: string }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: 10;
  width: 100%;
  height: 100%;
  transition: background-color ease-in-out 0.1s;
  /* transform: translate(-50%, -50%); */

  background: ${({ bgGradient = 'linear-gradient(45deg, red, blue)' }) => bgGradient};
  mix-blend-mode: multiply;
`

const Neon = styled.button<{ contentData?: string; textSize?: number }>`
  position: relative;
  border: 0;

  cursor: pointer;
  font-size: ${({ textSize }) => textSize}px;
  text-align: center;
  background: black;
  color: transparent;
  align-self: center;

  &:after,
  &:before {
    content: ${({ contentData = '-' }) => `'${contentData}'`};
    filter: blur(0.02em);
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  &:after {
    mix-blend-mode: difference;
  }
  & ~ ${Gradient} {
    visibility: hidden;
  }
  & ~ ${Spotlight} {
    /* visibility: hidden; */
  }

  &:hover ~ ${Gradient}, &:hover ~ ${Spotlight} {
    visibility: visible;
  }
`

type Props = {
  label: string
  textSize?: number
  gradient?: string[]
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export const NeonButton: React.FC<Props> = ({ label, textSize = 26, gradient = ['red', 'blue'], onClick }) => {
  const buildGradientColors = () => {
    return `linear-gradient(45deg, ${gradient.join(',')})`
  }
  return (
    <Container>
      <Neon contentData={label} textSize={textSize} onClick={onClick}>
        {label}
      </Neon>
      <Gradient bgGradient={buildGradientColors()} />
      <Spotlight />
    </Container>
  )
}
