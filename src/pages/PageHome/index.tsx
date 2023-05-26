import React from 'react'
import { uid } from 'react-uid'

import styled from 'styled-components'

import { Main, SliderItem, usePassRoll } from '~/components/PassRollLayout'

import { homeRoutes } from './sliders/routes'

const W = styled.div`
  margin: 0 auto;
  display: block;
  width: 500px;
  max-width: 100%;
  min-height: 500px !important;
  border: 1px dashed #f0f;
`
export const PageHome: React.FC = () => {
  const { goTo } = usePassRoll('main')

  const onChange = (index: number) => {
    console.log('onChange', index)
  }

  const onChangeComplete = (index: number) => {
    console.log('onChangeComplete', index)
  }

  const onLayout = (...args: any[]) => {
    console.log('onLayout', args)
  }

  return (
    <Main
      name="main"
      showingInactive
      onSliderChange={onChange}
      onSliderChangeComplete={onChangeComplete}
      onLayout={onLayout}
      timing={1000}
    >
      {homeRoutes.map((route, i) => {
        const { Component = null } = route
        return <SliderItem key={uid(route, i)}>{Component ? <Component /> : null}</SliderItem>
      })}
    </Main>
  )
}
