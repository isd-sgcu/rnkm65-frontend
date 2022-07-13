import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import { useRouter } from 'next/router'
import React from 'react'

import { Container } from './styled'

const NotFound = () => {
  const router = useRouter()
  return (
    <Container>
      <Typography variant="h3">ไม่พบหน้าที่ค้นหา</Typography>
      <Button type="button" onClick={() => router.push('/')}>
        กลับ
      </Button>
    </Container>
  )
}

export default NotFound
