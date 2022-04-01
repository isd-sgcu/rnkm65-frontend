import Baan from 'common/components/Baan'
import Typography from 'common/components/Typography'
import Image from 'next/image'
import { useRef } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookCircleLine } from 'react-icons/ri'

import { useDescriptionHooks } from './hooks/useDescriptionHooks'
import {
  CardContainer,
  DescriptionContainer,
  ImageDescription,
  RoundedImage,
  SocialDescription,
  StyledImage,
} from './styled'
import { ICardBaanProps } from './types'

const CardBaan = (props: ICardBaanProps) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const { ig, facebook, description, name, imageUrl, ...remain } = props
  const { handleRootMouseAway, handleRootMouseOver, pos, rootHover } =
    useDescriptionHooks(descriptionRef.current)

  return (
    <CardContainer
      ref={descriptionRef}
      onMouseOver={handleRootMouseOver}
      onMouseLeave={handleRootMouseAway}
    >
      <Baan {...remain} name={name} imageUrl={imageUrl} />
      <DescriptionContainer pos={pos} open={rootHover}>
        <ImageDescription>
          <StyledImage>
            <Image
              src="/tmp.jpg"
              width={90}
              height={90}
              className={RoundedImage()}
            />
          </StyledImage>
          <div>
            <Typography css={{ marginBottom: '0.5rem' }} color="yellow">
              {name}
            </Typography>
            <Typography color="yellow" variant="description">
              {description}
            </Typography>
          </div>
        </ImageDescription>
        <SocialDescription>
          <RiFacebookCircleLine size={24} color="#FFEDB3" />
          <Typography color="yellow">{facebook}</Typography>
        </SocialDescription>
        <SocialDescription>
          <FaInstagram size={24} color="#FFEDB3" />
          <Typography color="yellow">{ig}</Typography>
        </SocialDescription>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default CardBaan
