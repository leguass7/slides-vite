import { MainLayout } from '~/components/MainLayout'
import { Main, SliderItem, usePassRoll, ISliderDimensions } from '~/components/PassRollLayout'
import { routes } from '~/routes/routes'
import React from 'react'
import styled from 'styled-components'

const W = styled.div`
  margin: 0 auto;
  display: block;
  width: 500px;
  max-width: 100%;
  min-height: 500px !important;
  border: 1px dashed #f0f;
`
// import { Container } from './styles';

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
        timing={250}
      >
        {routes.map(({ Component = null, title }) => {
          return <SliderItem key={title}>{Component ? <Component /> : <p>asasas</p>}</SliderItem>
        })}
        {/* <SliderItem style={{ height: 120 }}>
          SLIDER 1<button onClick={() => goTo(2)}>to 2</button>
        </SliderItem>
        <SliderItem>
          SLIDER 2<button onClick={() => goTo(3)}>to 1</button>
        </SliderItem>
        <SliderItem>
          SLIDER 3<button onClick={() => goTo(4)}>to 1</button>
        </SliderItem>
        <SliderItem>
          SLIDER 4<button onClick={() => goTo(5)}>to 1</button>
        </SliderItem>
        <SliderItem>
          SLIDER 5<button onClick={() => goTo(1)}>to 1</button>
        </SliderItem> */}
      </Main>
    </MainLayout>
  )
}
