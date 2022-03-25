import Typography from 'common/components/Typography'
import React from 'react'
import { MdContentCopy } from 'react-icons/md'

import useCopyToClipboard from './hooks/useCopyToClipboard'
import { Container, CopyIcon, LinkContainer, Tooltip } from './styled'
import { InviteLinkProps } from './types'

const InviteLink = (props: InviteLinkProps) => {
  const { inviteLink } = props
  const { copyToClipboard, tooltipText } = useCopyToClipboard()
  return (
    <Container>
      <Typography variant="h3" color="yellow">
        Invite Link
      </Typography>
      <LinkContainer
        onClick={() => {
          copyToClipboard(inviteLink)
        }}
      >
        <Tooltip>{tooltipText}</Tooltip>
        <Typography variant="body" color="blue" style={{ flexGrow: 1 }}>
          {inviteLink}
        </Typography>
        <CopyIcon>
          <MdContentCopy />
        </CopyIcon>
      </LinkContainer>
    </Container>
  )
}

export default InviteLink
