import { APP_BASE_URL, SSO_BASE_URL } from 'config/env'
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
  const [isReady, setIsReady] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserDTO>()

  useEffect(() => {
    const fetchStoredToken = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        // TODO: exchange token for user profile from backend
        setUser({} as UserDTO)
        setIsAuthenticated(true)
      }
      setIsReady(true)
    }
    fetchStoredToken()
  }, [])

  const login = useCallback(() => {
    window.location.href = `${SSO_BASE_URL}/login?service=${APP_BASE_URL}/login`
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
