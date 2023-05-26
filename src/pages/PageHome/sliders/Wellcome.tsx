import React from 'react'

import { usePassRoll } from '~/components/PassRollLayout'

export const Wellcome: React.FC = () => {
  const { goTo } = usePassRoll('main')
  return (
    <div>
      WELLCOME
      <button onClick={() => goTo(2)}>GOTO 1</button>
    </div>
  )
}
