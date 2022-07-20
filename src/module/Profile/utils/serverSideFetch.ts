import { getDateStatus } from 'common/utils/date'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...getDateStatus(),
      ...(await serverSideTranslations(locale, ['common', 'profile'])),
      // Will be passed to the page component as props
      canAccessProfile: true, // !for development
    },
  }
}
