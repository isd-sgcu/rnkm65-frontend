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
        objectFit="cover"
        alt="missing estamp"
      />
    </StyledImage>
    <Typography
      variant="subhead3"
      color="blue"
      css={{ lineHeight: '1.75rem', '@sm': { lineHeight: '1.5rem' } }}
    >
      {name}
    </Typography>
  </Card>
)
export default PinCard
