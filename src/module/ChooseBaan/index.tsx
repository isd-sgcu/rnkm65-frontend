import Loading from 'common/components/Loading'
import Typography from 'common/components/Typography'
import { useAuth } from 'common/contexts/AuthContext'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import { useSwitch } from 'common/hooks/useSwitch'
import { IBaan } from 'common/types/baan'
import React, { FC, useMemo } from 'react'

import CardBaan from './components/CardBaan'
import ChoosedBaan from './components/ChoosedBaan'
import ConfirmModal from './components/ConfirmModal'
import DescriptionModal from './components/DescriptionModal'
import Search from './components/Search'
import { useBaanModal } from './hooks/useBaanModal'
import { useChoosenBaans } from './hooks/useChoosenBaans'
import {
  CardContainer,
  CatalogContainer,
  ChoosenContainer,
  RootContainer,
} from './styled'

const ChooseBaan: FC<{ data: IBaan[] }> = ({ data: initBaans }) => {
  const { close, open, baan: cBaan, openModal } = useBaanModal()
  const {
    state: submitModal,
    handleOpen: handleOpenSubmit,
    handleClose: handleCloseSubmit,
  } = useSwitch(false)
  const { t } = useSSRTranslation('chooseBaan')
  const { group } = useAuth()
  const {
    displayBaans,
    choosenBaans,
    filter,
    loading,
    onChooseBaan,
    onRemoveBaan,
    onSearch,
    onClickFilterSize,
    submitBaan,
    updateBaans,
  } = useChoosenBaans(initBaans, group?.baans || [])

  const modalSelect = useMemo(
    () =>
      choosenBaans.length < 3 &&
      !choosenBaans.find((val) => val.id === cBaan?.id),
    [cBaan?.id, choosenBaans]
  )

  return (
    <div>
      {loading && <Loading />}
      <RootContainer>
        <div>
          <ChoosenContainer>
            <Typography variant="h2" color="blue">
              {t('title')}
            </Typography>
            <Typography
              variant="subhead3"
              color="blue"
              css={{ marginTop: '-15px' }}
            >
              {t('description')}
            </Typography>
            <ChoosedBaan
              baans={choosenBaans}
              updateBaans={updateBaans}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              handleDelete={onRemoveBaan}
              handleConfirm={handleOpenSubmit}
            />
          </ChoosenContainer>
        </div>
        <CatalogContainer>
          <Search
            onSearch={onSearch}
            value={filter.search}
            baanSize={filter.size}
            onChooseBaanSize={onClickFilterSize}
          />
          <CardContainer>
            {displayBaans.map((baan) => (
              <CardBaan
                onClick={onChooseBaan}
                id={baan.id}
                key={baan.id}
                name={baan.name}
                imageUrl={baan.imageUrl}
                description={baan.description}
                enableModal
                index={baan.order ?? undefined}
                facebook={baan.facebook}
                ig={baan.ig}
                onClickModal={open(baan)}
              />
            ))}
          </CardContainer>
          <DescriptionModal
            canSelect={modalSelect}
            baan={cBaan ?? undefined}
            open={openModal}
            onClose={close}
            onConfirm={onChooseBaan}
          />
        </CatalogContainer>
      </RootContainer>
      <ConfirmModal
        allowSubmit={choosenBaans.length === 3}
        onClose={handleCloseSubmit}
        onConfirm={submitBaan}
        open={submitModal}
      />
    </div>
  )
}

export default ChooseBaan
