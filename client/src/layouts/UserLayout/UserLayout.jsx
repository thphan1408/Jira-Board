import React, { useState } from 'react'
import Header from '../../components/header'
import Center from '../../components/Center'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../../redux/boardsSlice'
import EmptyBoard from '../../components/EmptyBoard'

const UserLayout = () => {
  const dispatch = useDispatch()

  const boards = useSelector((state) => state.boards)
  const activeBoard = boards.find((board) => board.isActive)

  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)
  const [isElipsisOpen, setIsElipsisOpen] = useState(false)
  if (!activeBoard && boards.length > 0) {
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }))
  }
  return (
    <div className="overflow-hidden overflow-x-scroll">
      <>
        {boards.length > 0 ? (
          <>
            {/* Header Section*/}
            <Header
              isBoardModalOpen={isBoardModalOpen}
              setIsBoardModalOpen={setIsBoardModalOpen}
              isElipsisOpen={isElipsisOpen}
              setIsElipsisOpen={setIsElipsisOpen}
            />

            {/* Center section */}
            <Center
              isBoardModalOpen={isBoardModalOpen}
              isElipsisOpen={isElipsisOpen}
              setIsBoardModalOpen={setIsBoardModalOpen}
              setIsElipsisOpen={setIsElipsisOpen}
            />
          </>
        ) : (
          <>
            <EmptyBoard type={'add'} />
          </>
        )}
      </>
    </div>
  )
}

export default UserLayout
