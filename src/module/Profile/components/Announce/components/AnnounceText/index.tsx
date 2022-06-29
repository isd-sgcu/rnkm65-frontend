import Typography from 'common/components/Typography'

import { AnnounceTextContainer, JoinBaanContainer } from './styled'
import { IAnnounceTextProps } from './types'

const AnnounceText: React.FC<IAnnounceTextProps> = (props) => {
  const { baanName } = props

  return (
    <AnnounceTextContainer>
      <Typography variant="h1">ยินดีด้วย</Typography>
      <JoinBaanContainer>
        <Typography css={{ '@md': { textAlign: 'center' } }} variant="h2">
          คุณได้เข้า
          <Typography css={{ display: 'inline' }} color="pink" variant="h2">
            {baanName}
          </Typography>
        </Typography>
      </JoinBaanContainer>
      <Typography variant="subhead2">เดี๋ยวจะมีพี่ ๆ ทักไปหานะ</Typography>
    </AnnounceTextContainer>
  )
}

export default AnnounceText
