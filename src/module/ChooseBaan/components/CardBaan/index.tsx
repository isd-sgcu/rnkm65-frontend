import Baan from 'common/components/Baan'
import Typography from 'common/components/Typography'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookCircleLine } from 'react-icons/ri'

import {
  CardContainer,
  DescriptionContainer,
  ImageDescription,
  RoundedImage,
  SocialDescription,
  StyledImage,
} from './styled'

const CardBaan = () => {
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const countdownRef = useRef<number>(-1)
  const [pos, setPos] = useState<'left' | 'right'>('left')
  const [rootHover, setRootHover] = useState(false)

  const handleResize = useCallback(() => {
    const el = descriptionRef.current
    if (el) {
      const parentClientWidth = el.offsetParent!.clientWidth
      const { offsetLeft } = el
      if (parentClientWidth - offsetLeft >= 400) {
        setPos('left')
      } else {
        setPos('right')
      }
    }
  }, [])

  const handleRootMouseOver = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (countdownRef.current !== -1) return
      countdownRef.current = window.setTimeout(() => {
        setRootHover(true)
      }, 300)
    }
  }, [])

  const handleRootMouseAway = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.clearTimeout(countdownRef.current)
      countdownRef.current = -1
      setRootHover(false)
    }
  }, [])

  useEffect(() => {
    window?.addEventListener('resize', handleResize, true)

    return () => {
      window?.removeEventListener('resize', handleResize, true)
    }
  }, [handleResize])

  return (
    <CardContainer
      ref={descriptionRef}
      onMouseOver={handleRootMouseOver}
      onMouseLeave={handleRootMouseAway}
    >
      <Baan name="Hello" imageUrl="/tmp.jpg" index={0} id={1} />
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
              บ้านทรายทอง
            </Typography>
            <Typography color="yellow" variant="description">
              นี่คือสถาน แห่งบ้านทรายทอง ที่ฉันปองมาสู่ ฉันยังไม่รู้
              เขาจะต้อนรับ ขับสู้เพียงไหน อาจมียิ้มอาบ ฉาบบนสีหน้า ว่ามีน้ำใจ
              แต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา
            </Typography>
          </div>
        </ImageDescription>
        <SocialDescription>
          <FaInstagram size={24} color="#FFEDB3" />
          <Typography color="yellow">บ้านทรายทอง</Typography>
        </SocialDescription>
        <SocialDescription>
          <RiFacebookCircleLine size={24} color="#FFEDB3" />
          <Typography color="yellow">บ้านทรายทอง</Typography>
        </SocialDescription>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default CardBaan
