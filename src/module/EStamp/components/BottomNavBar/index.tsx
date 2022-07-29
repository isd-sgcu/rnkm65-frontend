import Image from 'next/image'

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
    <StyledButton>
      <StyledIcon>
        <Image src="/e-stamp/camera-icon.svg" layout="fill" />
      </StyledIcon>
    </StyledButton>
    <BackgroundButton />
  </CameraMenuContainer>
)
export default BottomNavBar
