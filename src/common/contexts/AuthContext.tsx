import { IGroup } from 'common/types/group'
import { IUser } from 'common/types/user'
import { getGroupProfile } from 'common/utils/group'
import { getUserProfile } from 'common/utils/user'
import { APP_BASE_URL, SSO_BASE_URL } from 'config/env'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

export interface IAuthContext {
  isReady: boolean
  isAuthenticated: boolean
  user?: IUser
  group?: IGroup
  login: () => void
  logout: () => void
  refreshContext: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [isReady, setIsReady] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<IUser>()
  const [group, setGroup] = useState<IGroup>()
  const isFetching = useRef(false)

  const refreshContext = useCallback(async () => {
    if (isFetching.current) {
      return
    }
    isFetching.current = true

    const token = localStorage.getItem('token')
    if (token) {
      const userProfile = await getUserProfile()
      if (!userProfile) {
        // TODO: Handle error
        localStorage.clear()
        throw new Error('Failed to validate token')
      }

      const groupProfile = await getGroupProfile()
      if (groupProfile) {
        setGroup(groupProfile)
      }

      setUser(userProfile)
      setIsAuthenticated(true)
    }

    isFetching.current = false
  }, [])

  useEffect(() => {
    const initializeContext = async () => {
      await refreshContext()
      setIsReady(true)
    }
    initializeContext()
  }, [refreshContext])

  const login = useCallback(() => {
    window.location.href = `${SSO_BASE_URL}/login?service=${APP_BASE_URL}/login`
  }, [])

  const logout = useCallback(() => {
    localStorage.clear()
    window.location.href = '/login'
  }, [])

  const value = useMemo(
    () => ({
      isReady,
      isAuthenticated,
      user,
      group,
      login,
      logout,
      refreshContext,
    }),
    [isReady, isAuthenticated, user, group, login, logout, refreshContext]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
