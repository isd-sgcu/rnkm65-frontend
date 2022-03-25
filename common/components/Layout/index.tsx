import React, { PropsWithChildren } from 'react'

import Header from './components/Header'

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout
