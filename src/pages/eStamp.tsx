import withGuard from 'common/guards/withGuard'
import EStamp from 'module/EStamp'

export { getServerSideProps } from 'module/EStamp/utils/serverSideFetch'
export default withGuard(EStamp)
