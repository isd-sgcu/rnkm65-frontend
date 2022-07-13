import withGuard from 'common/guards/withGuard'
import Profile from 'module/Profile'

export { getServerSideProps } from 'module/Profile/utils/serverSideFetch'
export default withGuard(Profile, {
  requiredData: true,
})
