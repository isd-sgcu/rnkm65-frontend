import Button from 'common/components/Button'
import { useAuth } from 'common/contexts/AuthContext'
import withGuard from 'common/guards/withGuard'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const TestPage = () => {
  const { user, refreshContext } = useAuth()
  const router = useRouter()

  return (
    <div>
      <p>Query Params: {router.asPath}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button onClick={refreshContext}>Refresh User Profile</Button>
    </div>
  )
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}

export default withGuard(TestPage)
