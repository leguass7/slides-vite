// import React from 'react'

import { Main } from './Main'
import { PassRollProvider, usePassRoll } from './PassRollProvider'
import { SliderItem } from './SliderList'

export type { ISliders, ISliderDimensions } from './PassRollProvider'
export { Main, PassRollProvider, SliderItem, usePassRoll }
// export type PassRollLayoutProps = {
//   name: string
// }

// export const PassRollLayout: React.FC<PassRollLayoutProps> = ({ children, name }) => {
//   return (
//     <PassRollProvider>
//       <Main name={name}>{children}</Main>
//     </PassRollProvider>
//   )
// }
