import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

const NavItems: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []

  return (
    <>
      {navItems.map(({ link }, i) => (
        <CMSLink key={i} {...link} appearance="link" className="px-3 py-3 md:py-0 text-2xl" />
      ))}
    </>
  )
}

export default NavItems
