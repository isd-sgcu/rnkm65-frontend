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
    <StyledButton onClick={onClick} aria-label="Open QR code scanner">
      <StyledIcon>
        <Image
          src="/e-stamp/camera-icon.svg"
          layout="fill"
          sizes="64px"
          alt="QR Scanner icon"
        />
      </StyledIcon>
    </StyledButton>
    <BackgroundButton />
  </CameraMenuContainer>
)
export default BottomNavBar
