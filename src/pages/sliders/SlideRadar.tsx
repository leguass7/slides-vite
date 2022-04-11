import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useAppTheme } from '~/components/AppTheme'
import { Button } from '~/components/buttons/Button'
import { usePassRoll } from '~/components/PassRollLayout'
import React, { useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
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
  width: 400px;
  height: 400px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0;
  svg .recharts-polar-radius-axis .recharts-polar-radius-axis-ticks .recharts-polar-radius-axis-tick {
    font-size: 10px;
    font-family: Sora;
  }
  svg .recharts-polar-angle-axis-tick .recharts-polar-angle-axis-tick-value {
    fill: #fff;
    font-size: 10px;
    font-family: Sora;
  }
`
// import { Container } from './styles';

const data = [
  { subject: 'Ousadia', N: 60, A: 43, P: 58, E: 55, fullMark: 100 },
  { subject: 'Comando', N: 38, A: 47, P: 50, E: 58, fullMark: 100 },
  { subject: 'Objetividade', N: 31, A: 43, P: 52, E: 53, fullMark: 100 },
  { subject: 'Assertividade', N: 28, A: 49, P: 48, E: 54, fullMark: 100 },
  { subject: 'Persuasão', N: 78, A: 40, P: 63, E: 58, fullMark: 100 },
  { subject: 'Extroversão', N: 85, A: 43, P: 62, E: 58, fullMark: 100 },
  { subject: 'Entusiasmo', N: 86, A: 43, P: 62, E: 56, fullMark: 100 },
  { subject: 'Sociabilidade', N: 80, A: 62, P: 58, E: 58, fullMark: 100 },
  { subject: 'Empatia', N: 80, A: 65, P: 60, E: 58, fullMark: 100 },
  { subject: 'Paciência', N: 77, A: 81, P: 57, E: 60, fullMark: 100 },
  { subject: 'Persistência', N: 55, A: 59, P: 56, E: 58, fullMark: 100 },
  { subject: 'Planejamento', N: 57, A: 66, P: 56, E: 59, fullMark: 100 },
  { subject: 'Organização', N: 46, A: 62, P: 51, E: 57, fullMark: 100 },
  { subject: 'Detalhismo', N: 38, A: 49, P: 50, E: 52, fullMark: 100 },
  { subject: 'Prudência', N: 50, A: 63, P: 57, E: 57, fullMark: 100 },
  { subject: 'Concentração', N: 38, A: 50, P: 56, E: 58, fullMark: 100 }
]

interface ChartState {
  a?: boolean
  n?: boolean
  p?: boolean
  e?: boolean
}
export const SlideRadar: React.FC = () => {
  const [showing, setShowing] = useState<ChartState>({ a: true, n: true, p: true, e: true })

  const { matchingBackgroudText } = useAppTheme()
  const { goTo } = usePassRoll('main')
  const color = matchingBackgroudText('primary')

  const toogle = (key: keyof ChartState) => {
    return (_event: React.ChangeEvent<HTMLInputElement>) => {
      setShowing(old => ({ ...old, [key]: !old[key] }))
    }
  }
  return (
    <Container textColor={color}>
      <Box>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} margin={{ left: 80 }}>
            <PolarGrid strokeOpacity={0.2} gridType="circle" />
            <PolarAngleAxis dataKey="subject" fillOpacity={0.5} fill="#FFF" />
            <PolarRadiusAxis fillOpacity={0.5} axisLine={false} tickCount={6} />
            <Radar name="fullMark" dataKey="N" stroke="#8884d8" fill="none" fillOpacity={0} strokeOpacity={0} />

            <Radar
              name="Natural"
              dataKey="N"
              stroke="#ffffff"
              fill="none"
              strokeOpacity={showing.n ? 1 : 0}
              dot={showing.n ? { fill: '#ffffff', stroke: '#ffffff' } : false}
            />
            <Radar
              name="Adaptado"
              dataKey="A"
              stroke="#cad65b"
              fill="none"
              // fillOpacity={0.6}
              strokeOpacity={showing.a ? 1 : 0}
              animationEasing={'ease-in-out'}
              animationBegin={300}
              dot={showing.a ? { fill: '#cad65b', stroke: '#cad65b' } : false}
            />
            <Radar
              name="Percepção"
              dataKey="P"
              stroke="#40b1ff"
              fill="none"
              // fillOpacity={0.6}
              strokeOpacity={showing.p ? 1 : 0}
              animationEasing={'ease-in-out'}
              animationBegin={600}
              dot={showing.p ? { fill: '#40b1ff', stroke: '#40b1ff' } : false}
            />
            <Radar
              name="Exigência"
              dataKey="E"
              stroke="#a369fe"
              fill="none"
              // fillOpacity={0.6}
              strokeOpacity={showing.e ? 1 : 0}
              animationEasing={'ease-in-out'}
              animationBegin={800}
              dot={showing.e ? { fill: '#a369fe', stroke: '#a369fe' } : false}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Box>
      <FormGroup row sx={{ justifyContent: 'center' }}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: '#ffffff', '&.Mui-checked': { color: '#ffffff' } }}
              onChange={toogle('n')}
              defaultChecked={!!showing.n}
            />
          }
          label="Natural"
          labelPlacement="end"
          sx={{ color: '#ffffff' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: '#cad65b', '&.Mui-checked': { color: '#cad65b' } }}
              onChange={toogle('a')}
              defaultChecked={!!showing.a}
            />
          }
          label="Adaptado"
          labelPlacement="end"
          sx={{ color: '#cad65b' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: '#40b1ff', '&.Mui-checked': { color: '#40b1ff' } }}
              onChange={toogle('p')}
              defaultChecked={!!showing.p}
            />
          }
          label="Percepção"
          labelPlacement="end"
          sx={{ color: '#40b1ff' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: '#a369fe', '&.Mui-checked': { color: '#a369fe' } }}
              onChange={toogle('e')}
              defaultChecked={!!showing.e}
            />
          }
          label="Exigência"
          labelPlacement="end"
          sx={{ color: '#a369fe' }}
        />
      </FormGroup>
      <Button onClick={() => goTo(1)} text="Avançar" iconName="ArrowForward" />
    </Container>
  )
}
