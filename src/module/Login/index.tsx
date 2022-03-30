import Button from 'common/components/Button'
import Checkbox from 'common/components/Checkbox'
import Typography from 'common/components/Typography'
import { useState } from 'react'

import { ContentContainer, RootContainer } from './styled'

const LoginPage = () => {
  const [isConfirm, setConfirm] = useState(false)

  const handleToggle = () => {
    setConfirm(!isConfirm)
  }

  return (
    <RootContainer>
      <Typography variant="h2">เข้าสู่่ระบบ</Typography>
      <ContentContainer>
        <Typography css={{ textAlign: 'center' }}>
          การเข้าชมเว็บไซต์นี้จำเป็นต้องใช้การยืนยันตัวตน ผ่านระบบ CUNET
          กรุณายอมรับเงื่อนไขการใช้งาน ดังกล่าวเพื่อเข้าใช้ระบบลงทะเบียนงาน CU
          WELCOME FAIR
        </Typography>
        <Checkbox
          checked={isConfirm}
          onChange={handleToggle}
          label="ข้าพเจ้ายินยอมเปิดเผยข้อมูลส่วนตัวในระบบ CUNET เพื่อใช้ในการลงทะเบียนงาน CU WELCOME FAIR"
        />
        <Button disabled>เข้าสู่ระบบด้วย CUNET</Button>
      </ContentContainer>
    </RootContainer>
  )
}

export default LoginPage
