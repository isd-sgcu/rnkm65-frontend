import Typography from 'common/components/Typography'
import Image from 'next/image'

import { Card, StyledImage } from './styled'
import { PinCardProps } from './types'

const PinCard = ({ name, imageURL }: PinCardProps) => (
  <Card>
    <StyledImage>
      <Image
        src={imageURL}
        sizes="64px"
        layout="fill"
        objectFit="contain"
        alt="missing estamp"
      />
    </StyledImage>
    <Typography variant="subhead3" color="blue">
      {name}
    </Typography>
  </Card>
)
export default PinCard
