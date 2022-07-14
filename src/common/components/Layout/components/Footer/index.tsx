import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'

import { FooterContainer, LogoContainer } from './styled'

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <Image src="/ISDlogo.svg" layout="fill" />
    </LogoContainer>
    <Typography variant="description">
      Freshers Fair, Student Government of Chulalongkorn University
      <br /> Copyright © 2022
    </Typography>
  </FooterContainer>
)

export default Footer
