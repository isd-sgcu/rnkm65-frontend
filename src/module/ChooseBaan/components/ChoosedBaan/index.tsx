import Baan from 'common/components/Baan'
import Button from 'common/components/Button'
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
                  {(providedInner) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      {...providedInner.dragHandleProps}
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
        <Button onClick={handleConfirm}>ยืนยัน</Button>
        <Link href="/" passHref>
          <Button variant="error">ยกเลิก</Button>
        </Link>
      </ButtonContainer>
    </Container>
  )
}

export default memo(ChoosedBaan)
