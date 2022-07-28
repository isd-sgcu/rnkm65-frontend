import Button from 'common/components/Button'
import Image from 'common/components/Image'
import Typography from 'common/components/Typography'
import useHideFooter from 'common/contexts/LayoutContext/hooks/useHideFooter'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React, { useCallback, useState } from 'react'

import {
  Box,
  CloseButtonContainer,
  ImageContainer,
  PlaceDetailsContainer,
  TextBox,
} from './styled'
import { PlaceInformationDrawerProps } from './types'

const PlaceInformationDrawer = ({
  title,
  titleEn,
  imgUrl,
  detail,
  detailEn,
  time,
  timeEn,
}: PlaceInformationDrawerProps) => {
  const { i18n, t } = useSSRTranslation('placeInformationDrawer')
  useHideFooter()

  const [checkInBtn, setCheckInBtn] = useState(false)
  const checkInBtnClickHandler = useCallback(() => {
    setCheckInBtn(true)
  }, [])

  return (
    <Box>
      <CloseButtonContainer>
        <Image src="/cross.svg" height={30} width={30} />
      </CloseButtonContainer>
      <Typography variant="h3" color="new-primary">
        {i18n.language === 'en' ? titleEn : title}
      </Typography>
      <ImageContainer>
        <Image src={imgUrl} width={500} height={250} />
      </ImageContainer>
      <PlaceDetailsContainer>
        <TextBox>
          <Typography color="new-primary">
            {i18n.language === 'en' ? detailEn : detail}
          </Typography>
          <hr />
          <Typography color="new-primary">
            {i18n.language === 'en' ? timeEn : time}
          </Typography>
        </TextBox>
        <Button
          type="button"
          variant="eStamp"
          disabled={checkInBtn}
          onClick={checkInBtnClickHandler}
        >
          {checkInBtn ? t('checkInBtnDone') : t('checkInBtn')}
        </Button>
      </PlaceDetailsContainer>
    </Box>
  )
}

export default PlaceInformationDrawer
