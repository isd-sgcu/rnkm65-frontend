import Baan from 'common/components/Baan'
import Button from 'common/components/Button'
import useSSRTranslation from 'common/hooks/useSSRTranslation'
import Link from 'next/link'
import { memo } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import {
  BaanContainer,
  ButtonContainer,
  Container,
  DeleteButton,
} from './styled'
import { ChoosedBannProps } from './types'

const ChoosedBaan = (props: ChoosedBannProps) => {
  const { baans, handleDelete, handleConfirm, updateBaans } = props
  const { t } = useSSRTranslation('chooseBaan')

  return (
    <Container>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result
          if (!destination) return

          const items = [...baans]
          const [reorderedItem] = items.splice(source.index, 1)
          items.splice(destination.index, 0, reorderedItem)

          updateBaans(items)
        }}
      >
        <Droppable droppableId="baans">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {baans.map((baan, idx) => (
                <Draggable key={baan.id} draggableId={`${baan.id}`} index={idx}>
                  {(innerProvided) => (
                    <div
                      ref={innerProvided.innerRef}
                      {...innerProvided.draggableProps}
                      {...innerProvided.dragHandleProps}
                    >
                      <BaanContainer>
                        <Baan {...baan} index={idx + 1} textPosition="right" />
                        <DeleteButton onClick={() => handleDelete(idx)} />
                      </BaanContainer>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <ButtonContainer>
        <Link href="/" passHref>
          <Button variant="decline">{t('cancel')}</Button>
        </Link>
        <Button onClick={handleConfirm}>{t('submit')}</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(ChoosedBaan)
