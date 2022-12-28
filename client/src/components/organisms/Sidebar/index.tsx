import Link from 'next/link'
import React, { FC } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ChevronRight, ChevronsLeft } from 'react-feather'

import { sidebarLinks } from '~/utils/constants'
import RenderIcon from '~/utils/FeatherRenderIcon'
import MyOvertimeIcon from '~/utils/icons/MyOvertimeIcon'

type Props = {}

const Sidebar: FC<Props> = (): JSX.Element => {
  const router = useRouter()

  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-slate-200 bg-white">
      <Link href="/" className="px-7 py-6 text-2xl font-bold outline-none">
        <span className="text-amber-500">Sun*</span> HRIS
      </Link>
      <nav className="default-scrollbar">
        <ul className="space-y-1.5 text-xs text-slate-500">
          {sidebarLinks?.my_nav.map(({ name, href, icon_name }, i) => (
            <li key={i}>
              <Link
                href={href}
                className={classNames(
                  'relative flex transition duration-75 ease-in-out hover:bg-slate-100 hover:text-slate-700',
                  router.asPath === href ? 'font-medium text-slate-800' : 'subpixel-antialiased'
                )}
              >
                <span
                  className={classNames(
                    'border-r-[4px]',
                    router.asPath === href ? 'rounded-r-lg border-slate-600' : 'border-transparent'
                  )}
                />
                <div className="flex w-full items-center space-x-3 px-6 py-1">
                  {name === 'My Overtime' ? (
                    <MyOvertimeIcon className="h-5 w-5 fill-current stroke-0.5" />
                  ) : (
                    <RenderIcon name={icon_name} className="h-5 w-5 stroke-0.5" />
                  )}
                  <span>{name}</span>
                </div>
              </Link>
            </li>
          ))}
          <hr />
          {sidebarLinks?.management.map(({ name, href, icon_name }, i) => (
            <li key={i}>
              <Link
                href={href}
                className={classNames(
                  'relative flex transition duration-75 ease-in-out hover:bg-slate-100 hover:text-slate-700',
                  router.asPath === href ? 'font-medium text-slate-800' : 'subpixel-antialiased'
                )}
              >
                <span
                  className={classNames(
                    'border-r-[4px]',
                    router.asPath === href ? 'rounded-r-lg border-slate-600' : 'border-transparent'
                  )}
                />
                <div className="flex w-full items-center space-x-3 px-6 py-1">
                  <RenderIcon name={icon_name} className="h-5 w-5 stroke-0.5" />
                  <span>{name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="mt-auto text-slate-500">
        <button
          type="button"
          className="inline-flex w-full items-center border-t border-slate-200 outline-none transition duration-75 ease-in-out  hover:text-slate-700"
        >
          <div className="flex items-start space-x-3 py-2.5 px-6">
            <div className="shrink-0">
              <img
                src="/images/default-avatar.jpg"
                className="h-7 w-7 rounded-full border border-slate-200"
                alt=""
              />
            </div>
            <div className="text-left text-xs">
              <h3 className="font-semibold line-clamp-1">Joshua Galit</h3>
              <small className="subpixel-antialiased">Sun Asterisk Philippines</small>
            </div>
          </div>
          <ChevronRight className="h-7 w-7 shrink-0 stroke-0.5" />
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center space-x-2 border-t border-slate-200 py-2 outline-none hover:text-slate-700"
        >
          <ChevronsLeft className="stroke-0.5" />
          <p className="text-xs uppercase">collapse</p>
        </button>
      </section>
    </aside>
  )
}

export default Sidebar
