'use client'

import React from 'react'
import { IconSwitcher } from '../icons/IconSwitcher'
import { Stack, Technology } from '@/types/types'
import Navigation from '../navigation/navigation'
import Link from 'next/link'

const HeroGeneral = ({ iconStack }: { iconStack?: Stack | Technology }) => {
  return (
    <div
      className="flex flex-col items-center justify-center relative border-b border-primaryDark"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0)), url('/bg-home-full-tv.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '350px',
      }}
    >
      <div className="h-full flex justify-between items-start container-wrapper relative py-8">
        <Navigation />

        {iconStack && (
          <Link
            href={`/stacks/${iconStack}`}
            className="flex flex-col items-center justify-center absolute -bottom-16 right-4 border border-primaryDark bg-white rounded-full w-[150px] h-[150px] group "
          >
            <IconSwitcher
              classCustom="w-16 h-auto group-hover:scale-105 group-focus:scale-105 transition-transform"
              icon={iconStack}
            />
            <small>{iconStack}</small>
          </Link>
        )}
      </div>
    </div>
  )
}

export default HeroGeneral
