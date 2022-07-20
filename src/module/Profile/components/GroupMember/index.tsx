import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'

import Member from './components/Member'
import Placeholder from './components/Placeholder'
import { GroupMemberProps } from './props'
import { Container, MembersContainer } from './styled'

const GroupMember = (props: GroupMemberProps) => {
  const { members, disabled } = props
  const { group, user } = useAuth()
  const { t } = useSSRTranslation('profile')

  const isKing = user?.id === group?.leaderID

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
            isKing={member.id === group?.leaderID}
            isDeletable={disabled ? false : isKing && idx !== 0}
          />
        ))}
        {members.length <= 1 && (
          <Placeholder color="#AE1C5D" backgroundColor="#fff" />
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
