import Button from 'common/components/Button'
import Image from 'common/components/Image'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
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
  const { baan, open, onConfirm, onClose, canSelect } = props

  const handleConfirm = useCallback(
    (id: number) => {
      onConfirm(id)
      onClose()
    },
    [onClose, onConfirm]
  )

  return (
    <Modal modalClassName={modalClassName()} open={open} onClose={onClose}>
      <RootDescription>
        <Image
          src={baan?.imageUrl ?? ''}
          width={90}
          height={90}
          layout="fixed"
          loading="lazy"
          className={RoundedImage()}
        />
        <Typography>{baan?.name ?? ''}</Typography>
        <Typography>{baan?.description ?? ''}</Typography>
        {baan?.facebook && (
          <SocialDescription>
            <RiFacebookCircleLine size={24} />
            <Typography>{baan?.facebook ?? ''}</Typography>
          </SocialDescription>
        )}
        {baan?.ig && (
          <SocialDescription>
            <FaInstagram size={24} />
            <Typography>{baan?.ig ?? ''}</Typography>
          </SocialDescription>
        )}
        <ButtonContainer>
          {canSelect && (
            <Button
              variant="primary"
              onClick={() => handleConfirm(baan?.id ?? 0)}
            >
              เลือกบ้าน
            </Button>
          )}
        </ButtonContainer>
      </RootDescription>
    </Modal>
  )
}

export default DescriptionModal
