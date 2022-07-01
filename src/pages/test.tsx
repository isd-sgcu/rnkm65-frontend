import withGuard from 'common/guards/withGuard'
import Profile from 'module/Profile'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'profile'])),
      // Will be passed to the page component as props
    },
  }
}

export default withGuard(Profile)
