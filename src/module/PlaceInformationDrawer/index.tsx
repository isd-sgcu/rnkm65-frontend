import Button from 'common/components/Button'
import Image from 'common/components/Image'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React, { useState } from 'react'

import { Box, ImageContainer, TextBox } from './styled'

const PlaceInformationDrawer = () => {
  // const data=Chamchuri9
  const { t } = useSSRTranslation('placeInformationDrawer')

  const [CheckInBtn, setCheckInBtn] = useState(false)

  let Btn = (
    <Button
      type="button"
      variant="eStamp"
      css={{ width: '80%' }}
      onClick={() => {
        setCheckInBtn(true)
      }}
    >
      Check - in
    </Button>
  )

  if (CheckInBtn) {
    Btn = (
      <Button
        type="button"
        variant="eStamp"
        css={{ color: '$new-primary', backgroundColor: '$white', width: '80%' }}
        onClick={() => {}}
      >
        Done
      </Button>
    )
  }

  return (
    //  <Drawer
    //      direction='bottom'
    //      open={isDrawerOpen}
    //      onClose={() => setisDrawerOpen(false)}
    //      className='Box'
    //  >
    <Box>
      <ImageContainer>
        <Image src="/cross.svg" height={40} width={40} onClick={() => {}} />
      </ImageContainer>
      <Typography variant="h3" css={{ marginTop: '20px' }}>
        {t('Chamchuri9.title')}
      </Typography>
      <Image src={t('Chamchuri9.imgUrl')} width={500} height={250} />
      <TextBox>
        <Typography variant="body" css={{ padding: '10px' }}>
          {t('Chamchuri9.detail')}
        </Typography>
        <hr />
        <Typography variant="body" css={{ padding: '10px' }}>
          {t('Chamchuri9.time')}
        </Typography>
      </TextBox>
      {Btn}
    </Box>
    //  </Drawer>
  )
}

export default PlaceInformationDrawer
