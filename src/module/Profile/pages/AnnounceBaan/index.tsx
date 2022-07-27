import { useAuth } from 'common/contexts/AuthContext'
import { IBaan } from 'common/types/baan'
import WithUserProfile from 'module/Profile/components/WithUserProfile'

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

const AnnounceBaan = () => {
  const { user } = useAuth()
  return (
    <WithUserProfile>
      <AnnounceContainer>
        <AnnounceText baanName={MOCK_BAAN.name} />
        <BaanCard {...(user?.baan || MOCK_BAAN)} />
      </AnnounceContainer>
    </WithUserProfile>
  )
}

export default AnnounceBaan
