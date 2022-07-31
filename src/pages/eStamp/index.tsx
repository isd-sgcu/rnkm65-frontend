import EStamp from 'module/EStamp'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'eStamp'])),
      // Will be passed to the page component as props
    },
  }
}
export default EStamp
