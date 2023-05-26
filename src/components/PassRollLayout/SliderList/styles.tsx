import styled from 'styled-components'

export const SliderListContainer = styled.div<{ position: number; timing: number }>`
  border: 0 !important;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  transition: all ease-in-out 0.1s;
  transition-duration: ${({ timing }) => timing}ms;
  transform: translateX(${({ position }) => position}px);
`

export const SliderItemContainer = styled.div`
  display: block;
  height: 100%;
  width: 100%;
`
