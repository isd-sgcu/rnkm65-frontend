import Typography from 'common/components/Typography'
import Image from 'next/image'

import { Card, StyledButton, StyledIcon, StyledImage } from './styled'
import { PinCardProps } from './types'

const PinCard = (props: PinCardProps) => {
  const { name, urlMap, id } = props
  return (
    <Card>
      <StyledImage>
        <Image src={`/e-stamp/pincard-image/${id}.jpg`} layout="fill" />
      </StyledImage>
      <Typography variant="subhead3" color="blue" css={{ marginLeft: '16px' }}>
        {name}
      </Typography>
      <StyledButton
        onClick={() => {
          window.open(urlMap)
        }}
      >
        <StyledIcon>
          <Image src="/e-stamp/pin-icon.svg" layout="fill" />
        </StyledIcon>
      </StyledButton>
    </Card>
  )
}
export default PinCard
