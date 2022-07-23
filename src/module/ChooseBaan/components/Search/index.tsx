import InputField from 'common/components/Input'
import Typography from 'common/components/Typography'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { BaanSize } from 'common/types/baan'
import { FC, memo } from 'react'

import { BAAN_SIZE } from './constants'
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

const Search: FC<Props> = ({ onSearch, value, baanSize, onChooseBaanSize }) => {
  const { t } = useSSRTranslation('chooseBaan')
  return (
    <div>
      <SearchInputContainer>
        <Typography css={{ width: 'fit-content', whiteSpace: 'nowrap' }}>
          {t('search')}
        </Typography>
        <InputField
          onChange={(e) => onSearch?.(e.target.value)}
          value={value}
          placeholder={t('searchPlaceholder')}
          css={{ backgroundColor: 'white' }}
        />
      </SearchInputContainer>
      <ButtonFilterContainer>
        {BAAN_SIZE.map(({ i18nLabel, size }) => (
          <BaanFilter
            key={size}
            onClick={() => onChooseBaanSize?.(size)}
            selected={baanSize?.includes(size)}
          >
            {t(i18nLabel)}
          </BaanFilter>
        ))}
      </ButtonFilterContainer>
    </div>
  )
}

Search.defaultProps = {
  onSearch: undefined,
  value: undefined,
  baanSize: undefined,
  onChooseBaanSize: undefined,
}

export default memo(Search)
