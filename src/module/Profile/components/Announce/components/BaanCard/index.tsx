import Typography from 'common/components/Typography'
import Image from 'next/image'
import { GrFacebook, GrInstagram } from 'react-icons/gr'

import {
  CardBody,
  CardBodyHeader,
  CardContact,
  CardContainer,
  CardImage,
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
      <CardBody>
        <CardBodyHeader>
          <CardImage>
            <Image width="140" height="170" src="/tmp.jpg" alt="handle" />
          </CardImage>
          <Typography css={{ wordBreak: 'break-word' }}>
            {description}
          </Typography>
        </CardBodyHeader>
        <CardContact>
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
        </CardContact>
      </CardBody>
    </CardContainer>
  )
}

export default BaanCard