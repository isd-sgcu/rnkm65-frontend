import React, { PropsWithChildren } from 'react'

import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import { ContentContainer, LayoutContainer } from './styled'

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <LayoutContainer>
    <Background />
    <Header />
    <ContentContainer>{children}</ContentContainer>
    <Footer />
  </LayoutContainer>
)

export default Layout
