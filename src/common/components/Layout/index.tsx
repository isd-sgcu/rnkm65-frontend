import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'

import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import { ContentContainer, LayoutContainer } from './styled'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  return (
    <LayoutContainer>
      <Head>
        <title>
          {router.locale === 'th'
            ? 'รับเพื่อนก้าวใหม่ 2565'
            : "Freshers' fairs 2022"}
        </title>
      </Head>
      <Background />
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
