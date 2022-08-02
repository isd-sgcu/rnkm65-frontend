import Loading from 'common/components/Loading'
import { useAuth } from 'common/contexts/AuthContext'
import { IBaan } from 'common/types/baan'
import WithUserProfile from 'module/Profile/components/WithUserProfile'

import AnnounceText from './components/AnnounceText'
import BaanCard from './components/BaanCard'
import { useBaanData } from './hooks/useBaanData'
import { AnnounceContainer } from './styled'

const AnnounceBaan = () => {
  const { user } = useAuth()
  const { baan, isLoading } = useBaanData(user?.baanId)
  return (
    <WithUserProfile>
      {isLoading && <Loading />}
      <AnnounceContainer>
        <AnnounceText baanName={baan?.name || ''} />
        <BaanCard {...(baan || ({} as IBaan))} />
      </AnnounceContainer>
    </WithUserProfile>
  )
}

export default AnnounceBaan
