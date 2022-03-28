import Typography from 'common/components/Typography'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MdContentCopy } from 'react-icons/md'

import useCopyToClipboard from './hooks/useCopyToClipboard'
import { Container, CopyIcon, LinkContainer, Tooltip } from './styled'
import { InviteLinkProps } from './types'

const InviteLink = (props: InviteLinkProps) => {
  const { inviteLink } = props
  const { handleCopyToClipboard, tooltipText } = useCopyToClipboard()
  return (
    <Container>
      <Typography variant="h3" color="yellow">
        Invite Link
      </Typography>
      <CopyToClipboard onCopy={handleCopyToClipboard} text={inviteLink}>
        <LinkContainer>
          <Tooltip>{tooltipText}</Tooltip>
          <Typography
            variant="body"
            color="blue"
            style={{ flexGrow: 1, wordBreak: 'break-all' }}
          >
            {inviteLink}
          </Typography>
          <CopyIcon>
            <MdContentCopy />
          </CopyIcon>
        </LinkContainer>
      </CopyToClipboard>
    </Container>
  )
}

export default InviteLink
