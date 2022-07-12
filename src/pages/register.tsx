import withGuard from 'common/guards/withGuard'
import RegisterForm from 'module/Register'
import { getServerSideProps } from 'module/Register/utils/serverSideFetch'

export default withGuard(RegisterForm, false, true)
export { getServerSideProps }
