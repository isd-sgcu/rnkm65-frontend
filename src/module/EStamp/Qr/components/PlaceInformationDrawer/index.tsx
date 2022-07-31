import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

import {
  Box,
  CloseButtonContainer,
  ImageContainer,
  LoadingSpinnerContainer,
  PlaceDetailsContainer,
  TextBox,
} from './styled'
import { PlaceInformationDrawerProps } from './types'

const PlaceInformationDrawer = ({ data }: PlaceInformationDrawerProps) => {
  const [checkInBtn, setCheckInBtn] = useState(false)
  const checkInBtnClickHandler = useCallback(() => {
    setCheckInBtn(true)
  }, [])

  return (
    <Box css={data ? {} : { justifyContent: 'center' }}>
      {!data ? (
        <LoadingSpinnerContainer>
          <Image src="/loadingSpinner.svg" width={200} height={200} />
        </LoadingSpinnerContainer>
      ) : (
        <>
          <CloseButtonContainer>
            <Image src="/cross.svg" height={30} width={30} />
          </CloseButtonContainer>
          <Typography variant="h3" color="new-primary">
            {data.title}
          </Typography>
          <ImageContainer>
            <Image src={data.imgUrl} width={500} height={250} />
          </ImageContainer>
          <PlaceDetailsContainer>
            <TextBox>
              <Typography color="new-primary">{data.detail}</Typography>
              <hr />
              <Typography color="new-primary">{data.time}</Typography>
            </TextBox>
            <Button
              type="button"
              variant="eStamp"
              disabled={checkInBtn}
              onClick={checkInBtnClickHandler}
            >
              {checkInBtn ? 'Done' : 'Check - in'}
            </Button>
          </PlaceDetailsContainer>
        </>
      )}
    </Box>
  )
}

export default PlaceInformationDrawer
