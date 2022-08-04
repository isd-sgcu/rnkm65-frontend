import withGuard from 'common/guards/withGuard'
import Checkin from 'module/Checkin'
import { getServerSideProps } from 'module/Checkin/utils/serverSideFetch'

export default withGuard(Checkin, {
  requiredData: true,
})
export { getServerSideProps }
