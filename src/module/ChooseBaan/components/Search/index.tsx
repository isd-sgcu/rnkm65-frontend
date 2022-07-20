import InputField from 'common/components/Input'
import Typography from 'common/components/Typography'
import { BaanSize } from 'common/types/baan'
import { FC, memo } from 'react'

import {
  BaanFilter,
  ButtonFilterContainer,
  SearchInputContainer,
} from './styled'

interface Props {
  onSearch?: (value: string) => void
  value?: string
  baanSize?: Array<BaanSize>
  onChooseBaanSize?: (baan: BaanSize) => void
}

const BAAN_SIZE = [
  {
    label: 'บ้านขนาดเล็ก (S)',
    size: BaanSize.Small,
  },
  {
    label: 'บ้านขนาดกลาง (M)',
    size: BaanSize.Medium,
  },
  {
    label: 'บ้านขนาดใหญ่ (L)',
    size: BaanSize.Large,
  },
  {
    label: 'บ้านขนาดใหญ่พิเศษ (XL)',
    size: BaanSize.ExtraLarge,
  },
  {
    label: 'บ้านขนาดใหญ่พิเศษใส่ไข่ (XXL)',
    size: BaanSize.ExtraExtraLarge,
  },
]

const Search: FC<Props> = ({ onSearch, value, baanSize, onChooseBaanSize }) => (
  <div>
    <SearchInputContainer>
      <Typography css={{ width: 'fit-content', whiteSpace: 'nowrap' }}>
        ค้นหาบ้าน
      </Typography>
      <InputField
        onChange={(e) => onSearch?.(e.target.value)}
        value={value}
        placeholder="ค้นหาบ้าน"
        css={{ backgroundColor: 'white' }}
      />
    </SearchInputContainer>
    <ButtonFilterContainer>
      {BAAN_SIZE.map(({ label, size }) => (
        <BaanFilter
          key={size}
          onClick={() => onChooseBaanSize?.(size)}
          selected={baanSize?.includes(size)}
        >
          {label}
        </BaanFilter>
      ))}
    </ButtonFilterContainer>
  </div>
)

Search.defaultProps = {
  onSearch: undefined,
  value: undefined,
  baanSize: undefined,
  onChooseBaanSize: undefined,
}

export default memo(Search)
