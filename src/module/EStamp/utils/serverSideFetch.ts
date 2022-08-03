import { getAllEvents } from 'common/utils/event'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  const [props, events] = await Promise.all([
    serverSideTranslations(locale, ['common', 'eStamp']),
    getAllEvents(),
  ])

  return {
    props: {
      ...props,
      // Will be passed to the page component as props
      events,
    },
  }
}
