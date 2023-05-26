import React from 'react'

export type NavItemProps = {
  children?: React.ReactNode | null
}
export const NavItem: React.FC = ({ children }) => {
  return <div>{children}</div>
}
