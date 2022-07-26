import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useBottomBackground from 'common/contexts/LayoutContext/hooks/useBottomBackground'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { canJoinGroup } from 'common/utils/group'

import { Box, Container, Link, Title } from './styled'

const LatePage = () => {
  const { t } = useSSRTranslation('late')
  const { user } = useAuth()
  const canSelectBaan = canJoinGroup(user)

  useBottomBackground()

  return (
    <Container>
      <Box>
        <Title>{t('sorry')}</Title>
        <span>
          {t('desc')}{' '}
          <Link href="https://www.facebook.com/chulafreshmen/">
            CU for Freshmen
          </Link>
        </span>
        {canSelectBaan && (
          <Typography color="new-secondary">{t('remark')}</Typography>
        )}
      </Box>
    </Container>
  )
}

export default LatePage
