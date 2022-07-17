import { BaanSize, IBaan } from '../types/baan'

//  [
//   {
//     name: 'บ้านทรายทอง',
//     description:
//       'นี่คือสถานแห่งบ้านทรายทอง ที่ฉันปองมาสู่ฉันยังไม่รู้เขาจะต้อนรับขับสู้เพียงไหนอาจมียิ้มอาบฉาบบนสีหน้าว่ามีน้ำใจแต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา',
//     imageUrl: '/tmp.jpg',
//     capacity: 50,
//     id: 0,
//     size: BaanSize.Small,
//   },
//   {
//     name: 'บ้านทรายเงิน',
//     description:
//       'นี่คือสถานแห่งบ้านทรายทอง ที่ฉันปองมาสู่ฉันยังไม่รู้เขาจะต้อนรับขับสู้เพียงไหนอาจมียิ้มอาบฉาบบนสีหน้าว่ามีน้ำใจแต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา',
//     imageUrl: '/tmp.jpg',
//     capacity: 50,
//     id: 1,
//     size: BaanSize.Small,
//   },
//   {
//     name: 'บ้านทรายทองแดง',
//     description:
//       'นี่คือสถานแห่งบ้านทรายทอง ที่ฉันปองมาสู่ฉันยังไม่รู้เขาจะต้อนรับขับสู้เพียงไหนอาจมียิ้มอาบฉาบบนสีหน้าว่ามีน้ำใจแต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา',
//     imageUrl: '/tmp.jpg',
//     capacity: 50,
//     id: 2,
//     size: BaanSize.Small,
//   },
//   {
//     name: 'บ้านทรายทองคำขาว',
//     description:
//       'นี่คือสถานแห่งบ้านทรายทอง ที่ฉันปองมาสู่ฉันยังไม่รู้เขาจะต้อนรับขับสู้เพียงไหนอาจมียิ้มอาบฉาบบนสีหน้าว่ามีน้ำใจแต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา',
//     imageUrl: '/tmp.jpg',
//     capacity: 50,
//     id: 3,
//     size: BaanSize.Small,
//   },
// ]

const generateBaan = (len: number) =>
  Array.from({ length: len }, (_, i) => ({
    name: `บ้านทรายทอง ${i + 1}`,
    description:
      'นี่คือสถานแห่งบ้านทรายทอง ที่ฉันปองมาสู่ฉันยังไม่รู้เขาจะต้อนรับขับสู้เพียงไหนอาจมียิ้มอาบฉาบบนสีหน้าว่ามีน้ำใจแต่สิ่งซ่อนไว้ในดวงจิต คือความริษยา',
    imageUrl: '/tmp.jpg',
    capacity: 50,
    id: i,
    size: BaanSize.Small,
    facebook: 'facebook',
    ig: 'ig',
  }))

export const baans: IBaan[] = generateBaan(10)