import { useAuth } from 'common/contexts/AuthContext'
import { IShortUser, IUser } from 'common/types/user'

const useKing = () => {
  const { group } = useAuth()

  return (user: IUser | IShortUser) => user.id === group?.leaderID
}

export default useKing
