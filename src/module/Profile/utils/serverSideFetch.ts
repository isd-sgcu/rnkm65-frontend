import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  const date = new Date('July 21, 2022 12:00 GMT+07:00').getTime()
  const now = new Date().getTime()

  return {
    props: {
      disable: now < date,
      ...(await serverSideTranslations(locale, ['common', 'profile'])),
      // Will be passed to the page component as props
    },
  }
}
