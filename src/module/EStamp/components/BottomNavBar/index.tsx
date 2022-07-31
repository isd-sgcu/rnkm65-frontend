import Image from 'next/image'

import {
  BackgroundButton,
  BackgroundMenu,
  CameraMenuContainer,
  StyledButton,
  StyledIcon,
} from './styled'
import { BottomNavBarProps } from './types'

const BottomNavBar = ({ onClick }: BottomNavBarProps) => (
  <CameraMenuContainer>
    <BackgroundMenu />
    <StyledButton onClick={onClick}>
      <StyledIcon>
        <Image src="/e-stamp/camera-icon.svg" layout="fill" />
      </StyledIcon>
    </StyledButton>
    <BackgroundButton />
  </CameraMenuContainer>
)
export default BottomNavBar
