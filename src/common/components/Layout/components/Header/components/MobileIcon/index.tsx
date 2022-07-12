import Image from 'next/image'
import React from 'react'

import { MobileIconProps } from './types'

const MobileIcon = ({ src, onClick }: MobileIconProps) => (
  <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <Image src={src} height={28} width={28} onClick={onClick} />
  </div>
)

export default MobileIcon
