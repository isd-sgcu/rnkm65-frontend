import { FC } from 'react'
import Image from 'next/image'

import {
  BottomLeftBGContainer,
  BottomRightBGContainer,
  TopRightBGContainer,
} from './styled'

export const BackgroundImage: FC = ({}) => {
  return (
    <>
      <TopRightBGContainer>
        <Image src="/top-right.svg" layout="fill" />
      </TopRightBGContainer>

      <BottomLeftBGContainer>
        <Image src="/bottom-left.svg" layout="fill" />
      </BottomLeftBGContainer>

      <BottomRightBGContainer>
        <Image src="/bottom-right.svg" layout="fill" />
      </BottomRightBGContainer>
    </>
  )
}
