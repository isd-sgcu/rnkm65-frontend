import InputField from 'common/components/Input'
import Typography from 'common/components/Typography'
import { FC, memo } from 'react'

import {
  BaanFilter,
  ButtonFilterContainer,
  SearchInputContainer,
} from './styled'

interface Props {
  onSearch?: (value: string) => void
  value?: string
}

const Search: FC<Props> = ({ onSearch, value }) => (
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
      <BaanFilter selected>บ้านขนาดเล็ก (S)</BaanFilter>
      <BaanFilter selected>บ้านขนาดกลาง (M)</BaanFilter>
      <BaanFilter>บ้านขนาดใหญ่ (L)</BaanFilter>
      <BaanFilter>บ้านขนาดใหญ่พิเศษ (XL)</BaanFilter>
    </ButtonFilterContainer>
  </div>
)

Search.defaultProps = {
  onSearch: undefined,
  value: undefined,
}

export default memo(Search)
