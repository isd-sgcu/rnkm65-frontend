import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Image from 'next/image'
import { useCallback } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookCircleLine } from 'react-icons/ri'

import {
  ButtonContainer,
  modalClassName,
  RootDescription,
  RoundedImage,
  SocialDescription,
} from './styled'
import { IDescriptionModal } from './types'

const DescriptionModal = (props: IDescriptionModal) => {
  const { baanKey, open, onConfirm, onClose } = props
  const { t } = useSSRTranslation('baanData')

  const handleConfirm = useCallback(() => {
    onConfirm(baanKey)
    onClose()
  }, [baanKey, onClose, onConfirm])

  return (
    <Modal modalClassName={modalClassName()} open={open} onClose={onClose}>
      <RootDescription>
        <Image
          src={t(`${baanKey}.imageUrl`)}
          width={90}
          height={90}
          layout="fixed"
          className={RoundedImage()}
        />
        <Typography color="yellow">{t(`${baanKey}.title`)}</Typography>
        <Typography color="yellow">{t(`${baanKey}.desc`)}</Typography>
        <SocialDescription>
          <RiFacebookCircleLine size={24} color="white" />
          <Typography css={{ color: '$white' }}>
            {t(`${baanKey}.facebook`)}
          </Typography>
        </SocialDescription>
        <SocialDescription>
          <FaInstagram size={24} color="white" />
          <Typography css={{ color: '$white' }}>
            {t(`${baanKey}.ig`)}
          </Typography>
        </SocialDescription>
        <ButtonContainer>
          <Button variant="primary" onClick={handleConfirm}>
            เลือกบ้าน
          </Button>
          <Button variant="secondary" onClick={onClose}>
            ยกเลิก
          </Button>
        </ButtonContainer>
      </RootDescription>
    </Modal>
  )
}

export default DescriptionModal
