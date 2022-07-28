import Button from 'common/components/Button'
import Image from 'common/components/Image'
import { LoadingImage } from 'common/components/Image/styled'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React, { useState } from 'react'

import {
  Box,
  CloseButtonContainer,
  PlaceDetailsContainer,
  TextBox,
} from './styled'

const PlaceInformationDrawer = () => {
  const { t } = useSSRTranslation('placeInformationDrawer')

  const [checkInBtn, setCheckInBtn] = useState(false)

  return (
    // <Drawer open={openDrawer}>
    <Box>
      <CloseButtonContainer>
        <Image
          src="/cross.svg"
          height={30}
          width={30}
          className={LoadingImage()}
        />
      </CloseButtonContainer>
      <Typography variant="h3" color="new-primary" css={{ marginTop: '20px' }}>
        {t('Chamchuri9.title')}
      </Typography>
      <Image src={t('Chamchuri9.imgUrl')} width={500} height={250} />
      <PlaceDetailsContainer>
        <TextBox>
          <Typography color="new-primary">{t('Chamchuri9.detail')}</Typography>
          <hr />
          <Typography color="new-primary">{t('Chamchuri9.time')}</Typography>
        </TextBox>
        <Button
          type="button"
          variant="eStamp"
          disabled={checkInBtn}
          onClick={() => {
            setCheckInBtn(true)
          }}
        >
          {checkInBtn ? 'Done' : 'Check - in'}
        </Button>
      </PlaceDetailsContainer>
    </Box>
    // </Drawer>
  )
}

export default PlaceInformationDrawer
