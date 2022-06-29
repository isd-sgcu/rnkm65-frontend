import Typography from 'common/components/Typography'
import Image from 'next/image'
import { GrFacebook, GrInstagram } from 'react-icons/gr'

import {
  CardBodyContainer,
  CardContactContainer,
  CardContainer,
  CardImageContainer,
  CardTitle,
} from './styled'
import { IBaanCardProps } from './types'

const BaanCard: React.FC<IBaanCardProps> = (props) => {
  const { baanName, description, ig, facebook } = props
  return (
    <CardContainer>
      <CardTitle>
        <Typography variant="h4" css={{ color: '$white', textAlign: 'center' }}>
          {baanName}
        </Typography>
      </CardTitle>
      <CardBodyContainer>
        <CardImageContainer>
          <Image width="140" height="170" src="/tmp.jpg" alt="handle" />
        </CardImageContainer>
        <Typography>{description}</Typography>
        <CardContactContainer>
          {facebook && (
            <Typography>
              <GrFacebook style={{ marginRight: '0.5rem' }} />
              {facebook}
            </Typography>
          )}
          {ig && (
            <Typography>
              <GrInstagram style={{ marginRight: '0.5rem' }} />
              {ig}
            </Typography>
          )}
        </CardContactContainer>
      </CardBodyContainer>
    </CardContainer>
  )
}

export default BaanCard
