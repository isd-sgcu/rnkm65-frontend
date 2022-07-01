import { APP_URL, CHULA_SSO_SERVER_ADDRESS } from 'common/constants/auth'
import { UserDTO } from 'dto/userDTO'
import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export interface IAuthContext {
  isReady: boolean
  isAuthenticated: boolean
  user?: UserDTO
  login: () => void
  logout: () => void
}

export const AuthContext = createContext({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const [isReady, setIsReady] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<UserDTO>()

  useEffect(() => {
    const fetchLocalStorage = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        // TODO: exchange token for user profile from backend
        setUser({} as UserDTO)
        setIsAuthenticated(true)
      }
      setIsReady(true)
    }
    fetchLocalStorage()
  }, [])

  const login = useCallback(() => {
    window.location.href = `${CHULA_SSO_SERVER_ADDRESS}/login?service=${APP_URL}/auth`
  }, [])

  const logout = useCallback(() => {
    localStorage.clear()
    router.replace('/login')
  }, [router])

  const value = useMemo(
    () => ({ isReady, isAuthenticated, user, login, logout }),
    [isReady, isAuthenticated, user, login, logout]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
