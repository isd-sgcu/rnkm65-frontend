import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { Trans } from 'next-i18next'

import { AnnounceTextContainer, JoinBaanContainer } from './styled'
import { IAnnounceTextProps } from './types'

const AnnounceText: React.FC<IAnnounceTextProps> = (props) => {
  const { baanName } = props
  const { t } = useSSRTranslation('profile')

  return (
    <AnnounceTextContainer>
      <Typography variant="h1">{t('announce.congrats')}</Typography>
      <JoinBaanContainer>
        <Typography css={{ '@md': { textAlign: 'center' } }} variant="h2">
          <Trans
            i18nKey="profile:announce.join"
            components={[
              <Typography
                css={{ display: 'inline' }}
                color="pink"
                variant="h2"
              />,
            ]}
            values={{ baan: baanName }}
          />
        </Typography>
      </JoinBaanContainer>
      <Typography variant="subhead2">{t('announce.comingSoon')}</Typography>
    </AnnounceTextContainer>
  )
}

export default AnnounceText
