import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  children?: React.ReactNode | null
}

export const SingleLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      LAYOUT{children}
      <Outlet />
    </div>
  )
}
