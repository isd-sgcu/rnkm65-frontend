import Button from 'common/components/Button'
import InputField from 'common/components/Input'
import Typography from 'common/components/Typography'

import { ButtonFilterContainer, SearchInputContainer } from './styled'

const Search = () => (
  <div>
    <SearchInputContainer>
      <Typography css={{ width: 'fit-content', whiteSpace: 'nowrap' }}>
        ค้นหาบ้าน
      </Typography>
      <InputField placeholder="ค้นหาบ้าน" />
    </SearchInputContainer>
    <ButtonFilterContainer>
      <Button>บ้านขนาดเล็ก (S)</Button>
      <Button>บ้านขนาดกลาง (M)</Button>
      <Button>บ้านขนาดใหญ่ (L)</Button>
      <Button>บ้านขนาดใหญ่พิเศษ (XL)</Button>
    </ButtonFilterContainer>
  </div>
)

export default Search
