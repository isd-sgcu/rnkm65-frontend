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
  const { key, open, onConfirm, onClose } = props

  const handleConfirm = useCallback(() => {
    onConfirm(key)
    onClose()
  }, [key, onClose, onConfirm])

  return (
    <Modal modalClassName={modalClassName()} open={open} onClose={onClose}>
      <RootDescription>
        <Image
          src="/tmp.jpg"
          width={90}
          height={90}
          layout="fixed"
          className={RoundedImage()}
        />
        <Typography color="yellow">บ้านทรายทอง</Typography>
        <Typography color="yellow">
          นี่คือสถาน แห่งบ้านทรายทอง ที่ฉันปองมาสู่ ฉันยังไม่รู้ เขาจะต้อนรับ
          ขับสู้เพียงไหน อาจมียิ้มอาบ ฉาบบนสีหน้า ว่ามีน้ำใจ
          แต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา
        </Typography>
        <SocialDescription>
          <RiFacebookCircleLine size={24} color="white" />
          <Typography css={{ color: '$white' }}>บ้านทรายทอง</Typography>
        </SocialDescription>
        <SocialDescription>
          <FaInstagram size={24} color="white" />
          <Typography css={{ color: '$white' }}>บ้านทรายทอง</Typography>
        </SocialDescription>
        <ButtonContainer>
          <Button variant="primary" onClick={handleConfirm}>
            ยืนยัน
          </Button>
          <Button variant="error" onClick={onClose}>
            ยกเลิก
          </Button>
        </ButtonContainer>
      </RootDescription>
    </Modal>
  )
}

export default DescriptionModal
