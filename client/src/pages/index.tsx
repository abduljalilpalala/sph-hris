import type { NextPage } from 'next'

import Layout from '~/components/templates/Layout'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout metaTitle="Home">
      <div className="p-8">This is Home Page.</div>
    </Layout>
  )
}

export default Index
