import { useLayout } from 'common/contexts/LayoutContext'
import Image from 'next/image'

import {
  BottomBGContainerDesktop,
  BottomBGContainerMobile,
  BottomLeftBGContainer,
  BottomRightBGContainer,
  Container,
  LeftBGContainer,
  TopRightBGContainer,
} from './styled'

const Background = () => {
  const { backgroundType } = useLayout()

  const background =
    backgroundType === 'default' ? (
      <>
        <TopRightBGContainer>
          <Image src="/background/top-right.svg" layout="fill" />
        </TopRightBGContainer>
        <BottomLeftBGContainer>
          <Image src="/background/bottom-left.svg" layout="fill" />
        </BottomLeftBGContainer>
        <LeftBGContainer>
          <Image src="/background/left.svg" layout="fill" />
        </LeftBGContainer>
        <BottomRightBGContainer>
          <Image src="/background/bottom-right.svg" layout="fill" />
        </BottomRightBGContainer>
      </>
    ) : (
      <>
        <BottomBGContainerDesktop>
          <Image src="/background/bottom-desktop.svg" layout="fill" />
        </BottomBGContainerDesktop>
        <BottomBGContainerMobile>
          <Image src="/background/bottom-mobile.svg" layout="fill" />
        </BottomBGContainerMobile>
      </>
    )

  return <Container>{background}</Container>
}

export default Background
