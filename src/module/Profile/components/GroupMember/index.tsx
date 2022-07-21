import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { apiClient } from 'common/utils/axios'
import useKing from 'module/Profile/hooks/useKing'
import React, { useCallback } from 'react'
import { useErrorHandler } from 'react-error-boundary'

import Member from './components/Member'
import Placeholder from './components/Placeholder'
import { GroupMemberProps } from './props'
import { Container, MembersContainer } from './styled'

const GroupMember = ({ disabled }: GroupMemberProps) => {
  const { group, user, refreshContext } = useAuth()
  const handleError = useErrorHandler()
  const { t } = useSSRTranslation('profile')
  const isKing = useKing()

  const handleLeaveGroup = useCallback(async () => {
    try {
      await apiClient.delete('/group/leave')
      await refreshContext()
    } catch (err) {
      handleError(err)
    }
  }, [handleError, refreshContext])

  if (!group || !user) return null

  const { members } = group
  members.sort((a) => (isKing(a) ? -1 : 1))

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
            isKing={isKing(member) && members.length !== 1}
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
      {!isKing(user) && (
        <Button css={{ marginTop: '20px' }} onClick={handleLeaveGroup}>
          {t('leaveGroup')}
        </Button>
      )}
    </Container>
  )
}

export default GroupMember
