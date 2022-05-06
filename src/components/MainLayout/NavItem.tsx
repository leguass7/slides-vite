import { tranparency } from '~/helpers/colors'
import React, { useCallback, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const click = keyframes`
  0% { opacity: 1; width: 0; height: 0;  }
  100%{ opacity: 0; width: 800px; height: 800px;  }
`

const Effect = styled.span<{ posTop?: number; posLeft?: number; clicked?: boolean; light?: boolean }>`
  position: absolute;
  overflow: hidden;
  /* background-color: ${({ light }) => tranparency(!!light, 0.3)}; */
  background: radial-gradient(circle, transparent 25%, ${({ light }) => tranparency(!!light, 0.4)});
  top: ${({ posTop }) => (posTop ? `${posTop}px` : '50%')};
  left: ${({ posLeft }) => (posLeft ? `${posLeft}px` : '50%')};
  border-radius: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  transition: all linear 0.1s;
  ${({ clicked }) =>
    clicked
      ? css`
          animation: ${click} 0.5s;
        `
      : css``}
`

const ItemContainer = styled.button<{ light?: boolean; actived?: boolean }>`
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-family: Sora;
  min-height: 64px;
  position: relative;
  color: ${({ light }) => (light ? '#000' : '#FFF')};
  text-shadow: 0 0 1px ${() => tranparency(false, 0.5)};
  padding: ${({ theme }) => `${theme.spacing.l}px ${theme.spacing.xl}px`};
  border: 0;
  margin: ${({ theme }) => `${theme.spacing.m}px auto`};
  font-size: 14px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    background-color: ${({ light }) => tranparency(!!light, 0.1)};

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* z-index: -1; */
  }
  &:after {
    content: '';
    position: absolute;
    background-color: ${({ actived }) => (actived ? '#F0F' : '#000')};
    width: 4px;
    height: 100%;
    top: 0;
    left: 0;
    /* z-index: -1; */
  }

  ${Effect} {
    z-index: -1;
  }
`
type ClickedState = {
  actived?: boolean
  top?: number
  left?: number
}
type Props = {
  title: string
  light?: boolean
}

export const NavItem: React.FC<Props> = ({ title, light }) => {
  const [clicked, setClicked] = useState<ClickedState>({ actived: false, top: 0, left: 0 })
  const ref = useRef<HTMLButtonElement>(null)

  const updateClicked = useCallback((data: ClickedState) => {
    setClicked(old => ({ ...old, ...data }))
  }, [])

  const start = useCallback(
    (time: any = null) => {
      time = setTimeout(() => {
        clearTimeout(time)
        updateClicked({ actived: false })
      }, 400)
    },
    [updateClicked]
  )

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    event => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        updateClicked({ actived: true, top: event.clientY - rect.top, left: event.clientX - rect.left })
        start()
      }
    },
    [updateClicked, start]
  )

  return (
    <div style={{ padding: '0 8px', position: 'relative' }}>
      <ItemContainer ref={ref} onClick={handleClick} light={light} actived>
        <Effect clicked={!!clicked?.actived} posTop={clicked?.top} posLeft={clicked?.left} light={light} />
        <span>{title}</span>
        <br />
        <span> </span>
      </ItemContainer>
    </div>
  )
}
