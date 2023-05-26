import React from 'react'

import styled from 'styled-components'

import { MainLayout } from '~/components/MainLayout'
import { Main, SliderItem, usePassRoll } from '~/components/PassRollLayout'
import { homeRoutes } from '~/routes/routes'

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
    <MainLayout>
      <Main
        name="main"
        showingInactive
        onSliderChange={onChange}
        onSliderChangeComplete={onChangeComplete}
        onLayout={onLayout}
        timing={1000}
      >
        {homeRoutes.map(({ Component = null, title }) => {
          return <SliderItem key={title}>{Component ? <Component /> : null}</SliderItem>
        })}
      </Main>
    </MainLayout>
  )
}
