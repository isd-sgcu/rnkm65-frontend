import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Image from 'next/image'
import React from 'react'

import {
  Box,
  CloseButtonContainer,
  ImageContainer,
  LoadingSpinnerContainer,
  PlaceDetailsContainer,
  TextBox,
} from './styled'
import { PlaceInformationDrawerProps } from './types'

const PlaceInformationDrawer = ({
  data,
  onClose,
}: PlaceInformationDrawerProps) => {
  const { t, i18n } = useSSRTranslation('eStamp')

  return (
    <Box css={data ? {} : { justifyContent: 'center' }}>
      {!data ? (
        <LoadingSpinnerContainer>
          <Image src="/loadingSpinner.svg" width={200} height={200} />
        </LoadingSpinnerContainer>
      ) : (
        <>
          <CloseButtonContainer onClick={onClose}>
            <Image src="/cross.svg" height={30} width={30} />
          </CloseButtonContainer>
          <Typography variant="h3" color="new-primary">
            {i18n.language === 'en' ? data.nameEN : data.nameTH}
          </Typography>
          <ImageContainer>
            <Image src="/จามจุรี9.png" width={500} height={250} />
          </ImageContainer>
          <PlaceDetailsContainer>
            <TextBox>
              <Typography color="new-primary" css={{ whiteSpace: 'pre-line' }}>
                {i18n.language === 'en'
                  ? data.descriptionEN
                  : data.descriptionTH}
              </Typography>
            </TextBox>
            <Button type="button" variant="eStamp" disabled={data.isChecked}>
              {data.isChecked
                ? t('placeInformationDrawer.doneButton')
                : t('placeInformationDrawer.checkInButton')}
            </Button>
          </PlaceDetailsContainer>
        </>
      )}
    </Box>
  )
}

export default PlaceInformationDrawer
