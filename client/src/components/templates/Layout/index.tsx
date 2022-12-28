import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

import Header from '~/components/organisms/Header'
import Sidebar from '~/components/organisms/Sidebar'

type Props = {
  metaTitle: string
  children: ReactNode
}

const Layout: FC<Props> = ({ metaTitle, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`Sun* HRIS - ${metaTitle}`}</title>
      </Head>
      <div className="flex min-h-screen flex-row overflow-hidden bg-slate-100 text-slate-800">
        {/* Sidebar navigation */}
        <Sidebar />
        <main className="flex flex-1 flex-col">
          {/* Header navigation */}
          <Header />
          {/* Dynamic Content */}
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
