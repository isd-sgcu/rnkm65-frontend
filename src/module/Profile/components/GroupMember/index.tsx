import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import React from 'react'

import Member from './components/Member'
import Placeholder from './components/Placeholder'
import { GroupMemberProps } from './props'
import { Container, MembersContainer } from './styled'
import { isGroupKing } from './utils'

const GroupMember = ({ disabled }: GroupMemberProps) => {
  const { group, user } = useAuth()
  const { t } = useSSRTranslation('profile')

  if (!group || !user) return null

  const { members } = group
  const isKing = isGroupKing(group)

  return (
    <Container>
      <Typography variant="h3" color="new-primary">
        {t('member')} ({members.length}/3)
      </Typography>
      <MembersContainer>
        {members.map((member) => (
          <Member
            key={member.id}
            user={member}
            isKing={isKing(member)}
            isDeletable={disabled ? false : isKing(user) && !isKing(member)}
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
