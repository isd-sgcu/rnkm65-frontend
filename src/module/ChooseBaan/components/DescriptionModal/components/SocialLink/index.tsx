import Typography from 'common/components/Typography'
import { FaInstagram } from 'react-icons/fa'

import { SocialDescription } from './styled'
import { ISocialLinkProps } from './types'

export const SocialLink = (props: ISocialLinkProps) => {
  const { icon, label, url } = props
  return label ? (
    <SocialDescription>
      {icon}
      <FaInstagram size={24} />
      <a target="_blank" href={url || ''} rel="noopener noreferrer">
        <Typography css={{ cursor: 'pointer', textDecoration: 'underline' }}>
          {url ?? ''}
        </Typography>
      </a>
    </SocialDescription>
  ) : null
}
