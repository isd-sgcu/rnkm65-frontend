import withGuard from 'common/guards/withGuard'
import Ticket from 'module/Ticket'

export { getStaticProps } from 'module/Ticket/utils/serverSideFetch'
export default withGuard(Ticket, { requiredData: true })
