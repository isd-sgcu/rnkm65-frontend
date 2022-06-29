import AnnounceText from './components/AnnounceText'
import BaanCard from './components/BaanCard'
import { AnnounceContainer } from './styled'
import { IAnnounceProps } from './types'

const Announce: React.FC<IAnnounceProps> = (props) => {
  const { baanName } = props

  return (
    <AnnounceContainer>
      <AnnounceText baanName={baanName} />
      <BaanCard {...props} />
    </AnnounceContainer>
  )
}

export default Announce
