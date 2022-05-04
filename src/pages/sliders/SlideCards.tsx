import { Box, Grid } from '@mui/material'
import Stack from '@mui/material/Stack'
import { AnimatedInput } from '~/components/AnimatedInput'
import { AnimedButton } from '~/components/AnimedButton'
import { useAppTheme } from '~/components/AppTheme'
import { Button } from '~/components/buttons/Button'
import { usePassRoll } from '~/components/PassRollLayout'
import React from 'react'
import styled from 'styled-components'

// import { Container } from './styles';
const Container = styled.div<{ textColor?: string }>`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  max-width: 100%;
  color: ${({ textColor = 'inherit' }) => textColor};
  p {
    border: 1px dashed #fff;
  }
`

export const CardsContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 1px dashed #000;
`

export const SlideCards: React.FC = () => {
  const { matchingBackgroudText } = useAppTheme()
  const color = matchingBackgroudText('primary')
  const { goTo } = usePassRoll('main')

  return (
    <Container textColor={color}>
      <CardsContainer>
        <br />
        <div style={{ padding: 10, width: 200 }}>
          <AnimatedInput />
        </div>
        <br />
        {/* <AnimedButton>TESTE</AnimedButton> */}
        <br />
        <div className="col-3">
          <input className="effect-7" type="text" placeholder="Placeholder Text" />
          <span className="focus-border">
            <i></i>
          </span>
        </div>
        <div className="col-3">
          <input className="effect-8" type="text" placeholder="Placeholder Text" />
          <span className="focus-border">
            <i></i>
          </span>
        </div>
        <div className="col-3">
          <input className="effect-9" type="text" placeholder="Placeholder Text" />
          <span className="focus-border">
            <i></i>
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Stack direction={'row'} spacing={1}>
          <Button onClick={() => goTo(3)} text="Avançar" iconName="ArrowForward" />
        </Stack>
      </CardsContainer>
      {/* <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>xs=8</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=4</p>
          </Grid>
          <Grid item xs={4}>
            <p>xs=4</p>
          </Grid>
          <Grid item xs={6}>
            <p>xs=8</p>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  )
}
