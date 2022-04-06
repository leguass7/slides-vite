import { useAppTheme } from '~/components/AppTheme'
import { Button } from '~/components/buttons/Button'
import { Logo } from '~/components/images/LogoSvg'
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
`

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0;

  svg {
    max-width: 60vmin;
  }

  h1 {
    font-size: calc(18px + 2vmin);
    text-align: center;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 20px;
    span {
      word-break: keep-all;
      white-space: nowrap;
    }
  }
  p {
    font-size: calc(12px + 2vmin);
    padding-bottom: 20px;
  }
`

export const Wellcome: React.FC = () => {
  const { matchingBackgroudText } = useAppTheme()
  const { goTo } = usePassRoll('main')
  const color = matchingBackgroudText('primary')
  return (
    <Container textColor={color}>
      <Box>
        <Logo width={512} color={color} />
        <h1>
          Bem-vindo ao <span>CIS Assessment Company</span>
        </h1>
        <p>Agora você vai conhecer a...</p>
        <Button onClick={() => goTo(2)} text="Avançar" iconName="ArrowForward" />
      </Box>
    </Container>
  )
}
