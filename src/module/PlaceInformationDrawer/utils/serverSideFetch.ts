import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const MOCK_DATA = {
  title: 'จามจุรี 9',
  titleEn: 'Chamchuri 9',
  imgUrl: '/จามจุรี9.png',
  detail:
    'ศูนย์บริการสุขภาพแห่งจุฬาลงกรณ์มหาวิทยาลัยเป็นสถานพยาบาลแบบปฐมภูมิในสังกัดสำนักงานมหาวิทยาลัยมีนโยบายให้บริการเป็นการภายในองค์กรและเป็นสวัสดิการโดยให้บริการตรวจรักษาแก่นิสิต บุคลากร ผู้เกษียณอายุราชการ และ ครอบครัวบุคลากรเป็นกลุ่มหลักการให้บริการด้านการแพทย์ของศูนย์บริการสุขภาพแห่งจุฬาฯ ได้แก่ การบริการตรวจรักษาโรคทั่วไป บริการทันตกรรม กายภาพบำบัด และคลินิกโรคเฉพาะทาง',
  detailEn:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id est sed tellus efficitur faucibus. Vivamus finibus elementum sem, vitae ornare dui tempus eget. Nunc vitae tristique mauris. Nullam in eleifend lorem. Donec id neque convallis, pretium dui laoreet, pulvinar sem. Aenean a commodo eros. Donec vitae est sem.',
  time: 'ศูนย์บริการสุขภาพแห่งจุฬาฯ เปิดให้บริการทุกวันจันทร์ – วันศุกร์ ตั้งแต่ 8.00 – 15.00 น.',
  timeEn:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultricies ex, in commodo nunc.',
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'placeInformationDrawer',
      ])),
      // Will be passed to the page component as props
      ...MOCK_DATA,
    },
  }
}
