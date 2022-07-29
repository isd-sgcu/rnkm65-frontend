import { getBaanInfo } from 'common/utils/baan'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'chooseBaan'])),
      // Will be passed to the page component as props
      data: await getBaanInfo(locale),
    },
    revalidate: 5 * 60,
  }
}
