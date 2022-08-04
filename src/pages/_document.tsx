import { API_BASE_URL } from 'config/env'
import { getCssText } from 'config/stitches.config'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="ระบบลงทะเบียนงานรับเพื่อนก้าวใหม่ ปีการศึกษา 2565 จุฬาลงกรณ์มหาวิทยาลัย"
          />
          <style
            id="stitches"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="preconnect" href={API_BASE_URL} />
          <link rel="dns-prefetch" href={API_BASE_URL} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
