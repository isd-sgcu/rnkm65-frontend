import withGuard from 'common/guards/withGuard'
import EStamp from 'module/EStamp'

export { getStaticProps } from 'module/EStamp/utils/serverSideFetch'
export default withGuard(EStamp, { requiredData: true })
