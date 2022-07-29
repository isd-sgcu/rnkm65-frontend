import Typography from 'common/components/Typography'
import { IBaan } from 'common/types/baan'
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

const BaanCard: React.FC<IBaan> = (props) => {
  const { name, description, ig, facebook } = props
  return (
    <CardContainer>
      <CardTitle>
        <Typography variant="h4" css={{ color: '$white', textAlign: 'center' }}>
          {name}
        </Typography>
      </CardTitle>
      <CardBody>
        <CardBodyHeader>
          <CardImage>
            <Image
              objectFit="cover"
              width="180"
              height="180"
              src="/tmp.jpg"
              alt="handle"
            />
          </CardImage>
          <Typography css={{ wordBreak: 'break-word' }}>
            {description}
          </Typography>
        </CardBodyHeader>
        <CardContact>
          {facebook && (
            <Typography css={{ display: 'flex', alignItems: 'center' }}>
              <GrFacebook size={20} style={{ marginRight: '0.5rem' }} />
              {facebook}
            </Typography>
          )}
          {ig && (
            <Typography css={{ display: 'flex', alignItems: 'center' }}>
              <GrInstagram size={20} style={{ marginRight: '0.5rem' }} />
              {ig}
            </Typography>
          )}
        </CardContact>
      </CardBody>
    </CardContainer>
  )
}

export default BaanCard
