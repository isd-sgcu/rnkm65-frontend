import useSSRTranslation from 'common/hooks/useSSRTranslation'

import { Box, Container, Link, Title } from './styled'

const LatePage = () => {
  const { t } = useSSRTranslation('late')
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
      </Box>
    </Container>
  )
}

export default LatePage
