import { useAuth } from 'common/contexts/AuthContext'
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
  const { isAuthenticated } = useAuth()

  return (
    <LayoutContainer>
      <Head>
        <title>
          {router.locale === 'th'
            ? 'รับเพื่อนก้าวใหม่ 2565'
            : "Freshers' Fair 2022"}
        </title>
      </Head>
      {process.env.NODE_ENV === 'production' &&
        isAuthenticated &&
        router.pathname !== '/login' && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M67TMJT')`,
              }}
            />
            <noscript>
              <iframe
                title="iframe-noscript"
                src="https://www.googletagmanager.com/ns.html?id=GTM-M67TMJT"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
      <Background />
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-WT8THZVG3B" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WT8THZVG3B');
        `}
          </Script>
        </>
      )}
    </LayoutContainer>
  )
}

export default Layout
