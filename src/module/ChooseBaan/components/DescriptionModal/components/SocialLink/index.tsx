import Typography from 'common/components/Typography'

import { SocialDescription } from './styled'
import { ISocialLinkProps } from './types'

export const SocialLink = (props: ISocialLinkProps) => {
  const { icon, label, url } = props
  return label ? (
    <SocialDescription>
      {icon}
      <a target="_blank" href={url || ''} rel="noopener noreferrer">
        <Typography css={{ cursor: 'pointer', textDecoration: 'underline' }}>
          {label ?? ''}
        </Typography>
      </a>
    </SocialDescription>
  ) : null
}
