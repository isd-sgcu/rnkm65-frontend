import { useAuth } from 'common/contexts/AuthContext'
import { useSwitch } from 'common/hooks/useSwitch'
import { IShortUser } from 'common/types/user'
import { apiClient } from 'common/utils/axios'
import { useCallback, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

export const useDeleteUserModal = () => {
  const {
    handleOpen,
    handleClose: handleCloseDelete,
    state: openDeleteModal,
  } = useSwitch(false)
  const [deletedMember, setDeletedMember] = useState<IShortUser>(
    {} as IShortUser
  )

  const handleError = useErrorHandler()
  const { refreshContext } = useAuth()

  const handleDelete = useCallback(async () => {
    try {
      await apiClient.delete(`/group/members/${deletedMember.id}`)
      await refreshContext()
      handleCloseDelete()
    } catch (err) {
      handleError(err)
    }
  }, [handleCloseDelete, handleError, deletedMember.id, refreshContext])

  const handleOpenDelete = useCallback(
    (member: IShortUser) => {
      setDeletedMember(member)
      handleOpen()
    },
    [handleOpen]
  )

  return {
    handleOpenDelete,
    handleCloseDelete,
    openDeleteModal,
    handleDelete,
    deletedMember,
  }
}
