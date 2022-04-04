import { usePassRoll } from '~/components/PassRollLayout'
import React from 'react'

// import { Container } from './styles';

export const Wellcome: React.FC = () => {
  const { goTo } = usePassRoll('main')
  return (
    <div>
      WELLCOME
      <button onClick={() => goTo(2)}>GOTO 1</button>
    </div>
  )
}
