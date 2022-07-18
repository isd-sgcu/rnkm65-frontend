import { baans } from 'common/mock/fakeBaans'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'chooseBaan',
        'baanData',
      ])),
      // Will be passed to the page component as props
      data: baans,
    },
    revalidate: 5 * 60,
  }
}
