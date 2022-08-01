import Typography from 'common/components/Typography'
import Image from 'next/image'

import { Card, StyledImage } from './styled'
import { PinCardProps } from './types'

const PinCard = ({ name, imgUrl }: PinCardProps) => (
  <Card>
    <StyledImage>
      <Image src={imgUrl} layout="fill" />
    </StyledImage>
    <Typography variant="subhead3" color="blue" css={{ marginLeft: '16px' }}>
      {name}
    </Typography>
  </Card>
)
export default PinCard
