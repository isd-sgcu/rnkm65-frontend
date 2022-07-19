import LatePage from 'module/LatePage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'late'])),
      // Will be passed to the page component as props
    },
  }
}
export default LatePage
