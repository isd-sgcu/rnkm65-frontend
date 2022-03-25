import React, { PropsWithChildren } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
