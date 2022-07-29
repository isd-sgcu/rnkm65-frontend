import Image from 'next/image'
import Link from 'next/link'

import {
  BackgroundButton,
  BackgroundMenu,
  CameraMenuContainer,
  StyledButton,
  StyledIcon,
} from './styled'

const BottomNavBar = () => (
  <CameraMenuContainer>
    <BackgroundMenu />
    <Link
      href={{
        pathname: '/eStamp/[slug]',
        query: { slug: 'qr' },
      }}
    >
      <StyledButton>
        <StyledIcon>
          <Image src="/e-stamp/camera-icon.svg" layout="fill" />
        </StyledIcon>
      </StyledButton>
    </Link>
    <BackgroundButton />
  </CameraMenuContainer>
)
export default BottomNavBar
