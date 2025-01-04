'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import React, { useEffect, useState, useTransition } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/ui/Icons'
import { HeaderNav } from './Nav'
import { usePathname } from '@/i18n/routing'
import { useMediaQuery } from '@/utilities/helpers'
import MobileNavCaller from './MobileNav/MobileNavCaller'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const isWideScreen = useMediaQuery('(min-width: 768px)')

  return (
    <header
      className="container relative z-20 py-8 flex justify-end gap-2"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <Link href="/" className="mr-auto">
        <Logo />
      </Link>
      {isWideScreen ? <HeaderNav header={header} /> : <MobileNavCaller />}
    </header>
  )
}
