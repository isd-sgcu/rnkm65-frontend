import useBottomBackground from 'common/components/Layout/components/Background/hooks/useBottomBackground'
import useSSRTranslation from 'common/hooks/useSSRTranslation'

import { Box, Container, Link, Title } from './styled'

const LatePage = () => {
  const { t } = useSSRTranslation('late')
  useBottomBackground()

  return (
    <Container>
      <Box>
        <Title>{t('sorry')}</Title>
        <span>
          {t('desc')}{' '}
          <Link href="https://www.instagram.com/rubpuenkaomai2022/">
            rubpuenkaomai2022
          </Link>
        </span>
      </Box>
    </Container>
  )
}

export default LatePage
