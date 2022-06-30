import TestPage from 'module/TestPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'profile', 'test'])),
      // Will be passed to the page component as props
    },
  }
}
export default TestPage
