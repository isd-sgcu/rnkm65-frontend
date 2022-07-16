import Button from 'common/components/Button'
import InputField from 'common/components/Input'
import Typography from 'common/components/Typography'
import { FC, memo } from 'react'

import { ButtonFilterContainer, SearchInputContainer } from './styled'

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
      />
    </SearchInputContainer>
    <ButtonFilterContainer>
      <Button>บ้านขนาดเล็ก (S)</Button>
      <Button>บ้านขนาดกลาง (M)</Button>
      <Button>บ้านขนาดใหญ่ (L)</Button>
      <Button>บ้านขนาดใหญ่พิเศษ (XL)</Button>
    </ButtonFilterContainer>
  </div>
)

Search.defaultProps = {
  onSearch: undefined,
  value: undefined,
}

export default memo(Search)
