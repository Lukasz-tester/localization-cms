'use client'
import { useState } from 'react'
import LocaleSwitcher from '../LocaleSwitcher'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'
import NavItems from '../NavItems'
import { Logo } from '@/components/ui/Icons'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export const MobileNavCaller: React.FC<{ header: HeaderType }> = ({ header }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        className="rounded w-12 h-12 flex items-center justify-center fixed top-4 right-4 text-white z-[1000]"
        onClick={() => setModalOpen(!modalOpen)}
      >
        |||
      </button>
      {modalOpen && (
        <div className="fixed inset-0 height-screen p-4 bg-black z-[10000] flex flex-col gap-6">
          <div onClick={() => setModalOpen(false)}>
            <div className="rounded bg-blue-900">
              <div className=" w-12 h-12 flex items-center justify-center fixed top-20 right-4">
                <Link href="/search">
                  <SearchIcon className="w-5 text-primary" />
                </Link>
              </div>
              <button className="w-12 h-12 flex items-center justify-center fixed top-4 right-4">
                X
              </button>
            </div>
            <div className="flex flex-col p-4 gap-6">
              <NavItems header={header} />
            </div>
          </div>
          <div className="flex flex-col gap-4 fixed bottom-20 right-4">
            <LocaleSwitcher />
            <ThemeSelector />
          </div>
          <div className="flex fixed bottom-8 left-5">
            <Logo />
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNavCaller
