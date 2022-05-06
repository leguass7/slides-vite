import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { AnimatedInput, FieldContainer } from '~/components/AnimatedInput'
import { useAppTheme } from '~/components/AppTheme'
import { Button } from '~/components/buttons/Button'
import { PanelContainer } from '~/components/PanelContainer'
import { usePassRoll } from '~/components/PassRollLayout'
import React from 'react'
import styled from 'styled-components'

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

export const SlideInputs: React.FC = () => {
  const { matchingBackgroudText } = useAppTheme()
  const color = matchingBackgroudText('primary')
  const { goTo } = usePassRoll('main')

  return (
    <Container textColor={color}>
      <PanelContainer spaced>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FieldContainer gap={5}>
              <AnimatedInput effect="middle" line={1} lineColor="#F0F" placeholder="central" />
            </FieldContainer>
            <FieldContainer gap={5}>
              <AnimatedInput effect="double" lineColor="#F0F" placeholder="bilateral" />
            </FieldContainer>
            <FieldContainer gap={5}>
              <AnimatedInput effect="unique" lineColor="#F0F" placeholder="único" />
            </FieldContainer>
            <FieldContainer gap={5}>
              <AnimatedInput effect="unique" lineColor="#F0F" light placeholder="único claro" />
            </FieldContainer>
          </Grid>
          <Grid item xs={3}>
            <FieldContainer>
              <AnimatedInput effect="middle" line={1} lineColor="#F0F" gap={5} placeholder="gap central" />
            </FieldContainer>
            <FieldContainer>
              <AnimatedInput effect="double" lineColor="#F0F" gap={5} placeholder="gap bilateral" />
            </FieldContainer>
            <FieldContainer>
              <AnimatedInput effect="unique" lineColor="#F0F" gap={5} placeholder="gap único" />
            </FieldContainer>
            <FieldContainer>
              <AnimatedInput effect="unique" lineColor="#F0F" light gap={5} placeholder="gap único claro" />
            </FieldContainer>
          </Grid>
        </Grid>
        <br />

        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <Stack direction={'row'} spacing={1}>
          <Button onClick={() => goTo(3)} text="Avançar" iconName="ArrowForward" />
        </Stack>
      </PanelContainer>
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
