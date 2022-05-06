import { alpha } from '@mui/material'

export function tranparency(light: boolean, opacity = 0.5) {
  const color = light ? '#ffffff' : '#000000'
  return alpha(color, opacity)
}
