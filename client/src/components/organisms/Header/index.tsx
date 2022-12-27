import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Menu, Bell } from 'react-feather'

import BreakIcon from '~/utils/icons/BreakIcon'
import { sidebarLinks } from '~/utils/constants'
import ClockInIcon from '~/utils/icons/ClockInIcon'
import ClockOutIcon from '~/utils/icons/ClockOutIcon'

type Props = {}

const Header: FC<Props> = (): JSX.Element => {
  const router = useRouter()

  return (
    <header className="flex w-full items-center justify-between border-b border-slate-200 bg-white py-3 px-4">
      <section className="flex items-center space-x-3">
        {/* Hamburger Menu */}
        <button type="button" className="outline-none">
          <Menu className="h-5 w-5 text-slate-600" />
        </button>
        {/* Header Title */}
        <h1 className="text-lg font-semibold text-slate-700">
          {sidebarLinks?.my_nav.map((my) => my.href === router.asPath && my.name)}
          {sidebarLinks?.management.map((my) => my.href === router.asPath && my.name)}
        </h1>
      </section>
      <section className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          {/* Timer */}
          <h3 className="text-base text-slate-500">00:00:00</h3>
          {/* Clock In Button */}
          <button className="outline-none">
            <ClockInIcon className="h-7 w-7 fill-current" />
          </button>
          {/* Break Button */}
          <button className="outline-none">
            <BreakIcon className="h-7 w-7 fill-current" />
          </button>
          {/* Clock Out Button */}
          <button className="outline-none">
            <ClockOutIcon className="h-7 w-7 fill-current" />
          </button>
        </div>
        <div className="inline-flex space-x-4">
          {/* Bell Notification */}
          <button type="button" className="outline-none">
            <Bell className="h-5 w-5 text-slate-400" />
          </button>
          {/* User Avatar */}
          <button type="button" className="shrink-0 outline-none">
            <img
              src="/images/default-avatar.jpg"
              className="h-8 w-8 rounded-full border border-slate-200"
              alt=""
            />
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header
