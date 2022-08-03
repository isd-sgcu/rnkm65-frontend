import Typography from 'common/components/Typography'
import Image from 'next/image'

import { Card, StyledImage } from './styled'
import { PinCardProps } from './types'

const PinCard = ({ name }: PinCardProps) => (
  <Card>
    <StyledImage>
      <Image src="/จามจุรี9.png" layout="fill" />
      {/** use image in public as a substitute since imageUrl get from backend can't be used */}
    </StyledImage>
    <Typography variant="subhead3" color="blue" css={{ marginLeft: '16px' }}>
      {name}
    </Typography>
  </Card>
)
export default PinCard
