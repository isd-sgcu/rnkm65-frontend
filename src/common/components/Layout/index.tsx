import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-WT8THZVG3B" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WT8THZVG3B');
        `}
      </Script>
    </LayoutContainer>
  )
}

export default Layout
