import Button from 'common/components/Button'
import Typography from 'common/components/Typography'

import { ContentContainer, RootContainer } from './styled'

const LoginPage = () => (
  <RootContainer>
    <Typography variant="h2">เข้าสู่่ระบบ</Typography>
    <ContentContainer>
      <Typography css={{ textAlign: 'center' }}>
        การเข้าชมเว็บไซต์นี้จำเป็นต้องใช้การยืนยันตัวตน ผ่านระบบ CUNET
        กรุณายอมรับเงื่อนไขการใช้งาน ดังกล่าวเพื่อเข้าใช้ระบบลงทะเบียนงาน CU
        WELCOME FAIR
      </Typography>
      <Button>เข้าสู่ระบบด้วย CUNET</Button>
    </ContentContainer>
  </RootContainer>
)

export default LoginPage
