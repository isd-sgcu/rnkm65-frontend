import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'

import Member from './components/Member'
import Placeholder from './components/Placeholder'
import { GroupMemberProps } from './props'
import { Container, MembersContainer } from './styled'

const GroupMember = (props: GroupMemberProps) => {
  const { members } = props
  const { t } = useSSRTranslation('profile')

  // TODO change this later
  const isKing = true

  return (
    <Container>
      <Typography variant="h3" color="new-primary">
        {t('member')} ({members.length}/3)
      </Typography>
      <MembersContainer>
        {members.map((member, idx) => (
          <Member
            {...member}
            key={`${member.firstname} ${member.lastname}`}
            isKing={idx === 0 && members.length > 1}
            isDeletable={isKing && idx !== 0}
          />
        ))}
        {members.length <= 1 && (
          <Placeholder color="#DC28A3" backgroundColor="#240668" />
        )}
        {members.length <= 2 && (
          <Placeholder color="#AE1C5D" backgroundColor="#fff" />
        )}
      </MembersContainer>
      {!isKing && (
        <Button css={{ marginTop: '20px' }}>{t('leaveGroup')}</Button>
      )}
    </Container>
  )
}

export default GroupMember
