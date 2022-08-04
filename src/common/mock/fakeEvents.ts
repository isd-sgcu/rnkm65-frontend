import { IEvent } from 'common/types/event'

const generateEvents = (len: number) =>
  Array.from({ length: len }, (_, i) => ({
    id: String(i),
    nameTH: 'อาคารจามจุรี 9',
    descriptionTH:
      // eslint-disable-next-line no-multi-str
      'ศูนย์บริการสุขภาพแห่งจุฬาลงกรณ์มหาวิทยาลัยเป็นสถานพยาบาลแบบปฐมภูมิ\
      ในสังกัดสำนักงานมหาวิทยาลัยมีนโยบายให้บริการเป็นการภายในองค์กรและ\
      เป็นสวัสดิการโดยให้บริการตรวจรักษาแก่นิสิต บุคลากร ผู้เกษียณอายุราชการ \
      และ ครอบครัวบุคลากรเป็นกลุ่มหลักการให้บริการด้านการแพทย์ของศูนย์บริการสุขภาพแห่งจุฬาฯ \
      ได้แก่ การบริการตรวจรักษาโรคทั่วไป บริการทันตกรรม กายภาพบำบัด และคลินิกโรคเฉพาะทาง\
      \nศูนย์บริการสุขภาพแห่งจุฬาฯ เปิดให้บริการ\nทุกวันจันทร์ – วันศุกร์ ตั้งแต่ 8.00 – 15.00 น.',
    nameEN: 'Chamchuri 9',
    descriptionEN:
      // eslint-disable-next-line no-multi-str
      'Chamchuri 9 is a 6-storeynbuilding located near CU sport complex.\
     It is a place where chula students usually go for reading especially in midterm \
     and final examination.The 3rd floor to 6th floor are studying areas. \
     There is also a CU Health Service Center for chula students and a post \
     office on the first floor of the building.\nOpening hours : Mon-Fri 8a.m.-3p.m.',
    imageURL: '/จามจุรี9.png',
  }))

export const events: IEvent[] = generateEvents(9)
export const checkedEvents: IEvent[] = events.filter((_, i) => i % 2 === 0)
