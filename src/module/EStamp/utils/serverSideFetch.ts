import { dehydrate, QueryClient } from '@tanstack/react-query'
import { getAllEvents } from 'common/utils/event'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: { locale: string }) {
  const queryClient = new QueryClient()
  const [props] = await Promise.all([
    serverSideTranslations(locale, ['common', 'eStamp']),
    queryClient.prefetchQuery(['allEvents'], () => getAllEvents()),
  ])

  return {
    props: {
      ...props,
      // Will be passed to the page component as props
      dehydratedState: dehydrate(queryClient),
    },
  }
}
