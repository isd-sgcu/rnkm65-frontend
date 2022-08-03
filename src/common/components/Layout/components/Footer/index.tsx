import Typography from 'common/components/Typography'
import Image from 'next/image'
import React from 'react'

import { sponsorMetadata } from './constants'
import {
  FooterContainer,
  LogoContainer,
  SponserLogo,
  SponserLogoContainer,
} from './styled'

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <Image src="/ISDlogo.svg" layout="fill" />
    </LogoContainer>
    <SponserLogoContainer>
      {sponsorMetadata.map((val) => (
        <SponserLogo
          key={val.name}
          css={{
            width: val.width,
            height: val.height,
          }}
        >
          <Image
            alt={val.name}
            src={`/sponsor/${val.filename}`}
            layout="fill"
          />
        </SponserLogo>
      ))}
    </SponserLogoContainer>
    <Typography variant="description">
      Freshers&apos; Fair, Student Government of Chulalongkorn University
      <br /> Copyright © 2022
    </Typography>
  </FooterContainer>
)

export default Footer
