import { IBaan } from 'common/types/baan'

import AnnounceText from './components/AnnounceText'
import BaanCard from './components/BaanCard'
import { AnnounceContainer } from './styled'

const MOCK_BAAN = {
  name: 'baanName',
  imageUrl: 'imageUrl',
  description: 'description',
  facebook: 'facebook',
  ig: 'ig',
} as IBaan

const AnnounceBaan = () => (
  <AnnounceContainer>
    <AnnounceText baanName={MOCK_BAAN.name} />
    <BaanCard {...MOCK_BAAN} />
  </AnnounceContainer>
)

export default AnnounceBaan
