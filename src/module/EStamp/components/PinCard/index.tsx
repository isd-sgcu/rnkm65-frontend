import Typography from 'common/components/Typography'
import Image from 'next/image'

import { Card, StyledImage } from './styled'
import { PinCardProps } from './types'

const PinCard = ({ name }: PinCardProps) => (
  <Card>
    <StyledImage>
      <Image
        src="/e-stamp/pincard-image.jpeg"
        layout="fill"
        objectFit="contain"
      />
    </StyledImage>
    <Typography variant="subhead3" color="blue">
      {name}
    </Typography>
  </Card>
)
export default PinCard
