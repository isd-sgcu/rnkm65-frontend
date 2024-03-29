import { useMutation, useQueryClient } from '@tanstack/react-query'
import Button from 'common/components/Button'
import ImageWithLoadingSkeleton from 'common/components/Image'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { checkInEvent } from 'common/utils/event'
import Image from 'next/image'
import React, { useCallback, useEffect } from 'react'

import {
  Box,
  CloseButtonContainer,
  ImageContainer,
  LoadingSpinnerContainer,
  PlaceContainer,
  PlaceDetailsContainer,
  TextBox,
} from './styled'
import { PlaceInformationDrawerProps } from './types'

const PlaceInformationDrawer = ({
  data,
  open,
  onClose,
}: PlaceInformationDrawerProps) => {
  const { t, i18n } = useSSRTranslation('eStamp')
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(
    ['events'],
    async () => {
      if (data) await checkInEvent(data.id)
    },
    { onSuccess: () => queryClient.invalidateQueries(['events']) }
  )
  const buttonClickHandler = useCallback(() => mutate(), [mutate])

  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [data])

  return (
    <Box
      css={
        data
          ? {}
          : {
              justifyContent: 'center',
              position: open ? 'relative' : 'absolute',
              zIndex: 5,
              bottom: 0,
            }
      }
    >
      {!data ? (
        <LoadingSpinnerContainer>
          <Image src="/loadingSpinner.svg" width={200} height={200} />
        </LoadingSpinnerContainer>
      ) : (
        <>
          <CloseButtonContainer onClick={onClose}>
            <Image src="/cross.svg" height={30} width={30} />
          </CloseButtonContainer>
          <PlaceContainer>
            <Typography
              variant="h3"
              color="new-primary"
              css={{ margin: '0 2rem', textAlign: 'center' }}
            >
              {i18n.language === 'en' ? data.nameEN : data.nameTH}
            </Typography>
            <ImageContainer>
              <ImageWithLoadingSkeleton
                src={data.imageURL}
                width={500}
                height={250}
                objectFit="cover"
              />
            </ImageContainer>
            <PlaceDetailsContainer>
              <TextBox>
                <Typography
                  color="new-primary"
                  css={{ whiteSpace: 'pre-line' }}
                >
                  {i18n.language === 'en'
                    ? data.descriptionEN
                    : data.descriptionTH}
                </Typography>
              </TextBox>
              <Button
                type="button"
                variant="eStamp"
                disabled={data.isChecked || isLoading}
                onClick={buttonClickHandler}
              >
                {isLoading && (
                  <Image src="/loadingSpinner.svg" width={16} height={16} />
                )}
                {!isLoading &&
                  (data.isChecked
                    ? t('placeInformationDrawer.doneButton')
                    : t('placeInformationDrawer.checkInButton'))}
              </Button>
            </PlaceDetailsContainer>
          </PlaceContainer>
        </>
      )}
    </Box>
  )
}

export default PlaceInformationDrawer
