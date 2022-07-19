import Typography from 'common/components/Typography'
import { IBaan } from 'common/types/baan'
import React, { FC, useMemo } from 'react'

import CardBaan from './components/CardBaan'
import ChoosedBaan from './components/ChoosedBaan'
import DescriptionModal from './components/DescriptionModal'
import Search from './components/Search'
import { useBaanModal } from './hooks/useBaanModal'
import { useChoosenBaans } from './hooks/useChoosenBaans'
import { CardContainer, CatalogContainer, RootContainer } from './styled'

const ChooseBaan: FC<{ data: IBaan[] }> = ({ data: initBaans }) => {
  const { close, open, baan: cBaan, openModal } = useBaanModal()
  const {
    displayBaans,
    choosenBaans,
    onChooseBaan,
    onRemoveBaan,
    onSearch,
    onClickFilterSize,
    updateBaans,
    filter,
  } = useChoosenBaans(initBaans, [])

  const modalSelect = useMemo(
    () =>
      choosenBaans.length < 3 &&
      !choosenBaans.find((val) => val.id === cBaan?.id),
    [cBaan?.id, choosenBaans]
  )

  return (
    <div>
      <RootContainer>
        <div>
          <div
            style={{
              position: 'sticky',
              top: 0,
            }}
          >
            <Typography variant="h1" color="blue">
              เลือกบ้าน
            </Typography>
            <Typography
              variant="subhead3"
              color="blue"
              css={{ marginTop: '-15px', whiteSpace: 'nowrap' }}
            >
              เลือก 3 บ้านที่สนใจมากที่สุด
            </Typography>
            <ChoosedBaan
              baans={choosenBaans}
              updateBaans={updateBaans}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              handleDelete={onRemoveBaan}
              // handleConfirm={() => {}}
            />
          </div>
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
    </div>
  )
}

export default ChooseBaan
