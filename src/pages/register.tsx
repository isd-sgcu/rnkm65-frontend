import withGuard from 'common/guards/withGuard'
import RegisterForm from 'module/Register'
import { getStaticProps } from 'module/Register/utils/serverSideFetch'

export default withGuard(RegisterForm, {
  disabledRedirect: true,
})
export { getStaticProps }
