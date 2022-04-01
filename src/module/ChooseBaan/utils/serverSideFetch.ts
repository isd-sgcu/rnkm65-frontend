import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'chooseBaan',
        'baanData',
      ])),
      // Will be passed to the page component as props
    },
  }
}
