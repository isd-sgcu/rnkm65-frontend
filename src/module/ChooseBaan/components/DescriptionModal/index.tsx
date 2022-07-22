import Button from 'common/components/Button'
import Image from 'common/components/Image'
import Modal from 'common/components/Modal'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useCallback } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookCircleLine } from 'react-icons/ri'

import { SocialLink } from './components/SocialLink'
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
  const { t } = useSSRTranslation('chooseBaan')

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
        <Typography variant="h4">{baan?.name ?? ''}</Typography>
        <Typography
          css={{
            whiteSpace: 'pre-line',
            textAlign: 'center',
            maxWidth: '500px',
          }}
        >
          {baan?.description ?? ''}
        </Typography>
        <SocialLink
          icon={<RiFacebookCircleLine size={24} />}
          label={baan?.facebook}
          url={baan?.facebookUrl}
        />
        {baan?.facebook && (
          <SocialDescription>
            <a
              target="_blank"
              href={baan?.facebookUrl || ''}
              rel="noopener noreferrer"
            >
              <Typography
                css={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                {baan?.facebook ?? ''}
              </Typography>
            </a>
          </SocialDescription>
        )}
        {baan?.ig && (
          <SocialDescription>
            <FaInstagram size={24} />
            <a
              target="_blank"
              href={baan?.igUrl || ''}
              rel="noopener noreferrer"
            >
              <Typography
                css={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                {baan?.ig ?? ''}
              </Typography>
            </a>
          </SocialDescription>
        )}
        <ButtonContainer>
          {canSelect && (
            <Button
              variant="primary"
              onClick={() => handleConfirm(baan?.id ?? 0)}
            >
              {t('chooseBtn')}
            </Button>
          )}
        </ButtonContainer>
      </RootDescription>
    </Modal>
  )
}

export default DescriptionModal
