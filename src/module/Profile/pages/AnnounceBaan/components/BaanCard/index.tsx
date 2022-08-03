import Image from 'common/components/Image'
import { SocialLink } from 'common/components/SocialLink'
import Typography from 'common/components/Typography'
import { IBaan } from 'common/types/baan'
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
  const { name, description, ig, facebook, imageUrl, facebookUrl, igUrl } =
    props
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
              src={imageUrl}
              alt={name}
            />
          </CardImage>
          <Typography css={{ wordBreak: 'break-word' }}>
            {description}
          </Typography>
        </CardBodyHeader>
        <CardContact>
          <SocialLink
            icon={<GrFacebook size={20} style={{ marginRight: '0.5rem' }} />}
            label={facebook}
            url={facebookUrl}
          />
          <SocialLink
            icon={<GrInstagram size={20} style={{ marginRight: '0.5rem' }} />}
            label={ig}
            url={igUrl}
          />
        </CardContact>
      </CardBody>
    </CardContainer>
  )
}

export default BaanCard
