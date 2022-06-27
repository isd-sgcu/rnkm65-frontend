import Button from 'common/components/Button'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
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
  const { baan, open, onConfirm, onClose } = props

  const handleConfirm = useCallback(
    (id: number) => {
      onConfirm(id)
      onClose()
    },
    [onClose, onConfirm]
  )

  return open ? (
    <Modal modalClassName={modalClassName()} open={open} onClose={onClose}>
      <RootDescription>
        <Image
          src={baan?.imageUrl ?? ''}
          width={90}
          height={90}
          layout="fixed"
          className={RoundedImage()}
        />
        <Typography color="yellow">{baan?.name ?? ''}</Typography>
        <Typography color="yellow">{baan?.description ?? ''}</Typography>
        <SocialDescription>
          <RiFacebookCircleLine size={24} color="white" />
          <Typography css={{ color: '$white' }}>
            {baan?.facebook ?? ''}
          </Typography>
        </SocialDescription>
        <SocialDescription>
          <FaInstagram size={24} color="white" />
          <Typography css={{ color: '$white' }}>{baan?.ig ?? ''}</Typography>
        </SocialDescription>
        <ButtonContainer>
          <Button
            variant="primary"
            onClick={() => handleConfirm(baan?.id ?? 0)}
          >
            เลือกบ้าน
          </Button>
          <Button variant="secondary" onClick={onClose}>
            ยกเลิก
          </Button>
        </ButtonContainer>
      </RootDescription>
    </Modal>
  ) : null
}

export default DescriptionModal
