import withGuard from 'common/guards/withGuard'
import ChooseBaan from 'module/ChooseBaan'
import { getStaticProps } from 'module/ChooseBaan/utils/serverSideFetch'

export default withGuard(ChooseBaan, {
  requiredData: true,
})
export { getStaticProps }
