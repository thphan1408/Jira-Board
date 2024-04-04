import React, { useState } from 'react'
import logo from '../assets/logo-mobile.svg'
import iconDown from '../assets/icon-chevron-down.svg'
import iconUp from '../assets/icon-chevron-up.svg'
import elipsis from '../assets/icon-vertical-ellipsis.svg'
import HeaderDropdown from './HeaderDropdown'
import AddEditBoardModal from './modals/AddEditBoardModal'
import AddEditTaskModal from './modals/AddEditTaskModal'
import ElipsisMenu from './ElipsisMenu'
import { useDispatch, useSelector } from 'react-redux'
import DeleteModal from './DeleteModal'
import boardsSlice from '../redux/boardsSlice'

const Header = ({
  isBoardModalOpen,
  setIsBoardModalOpen,
  isElipsisOpen,
  setIsElipsisOpen,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [isDeteleModalOpen, setIsDeteleModalOpen] = useState(false)
  const [openAddEditTask, setOpenAddEditTask] = useState(false)

  const [boardType, setBoardType] = useState('add')
  const dispatch = useDispatch()

  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive)

  const setOpenEditModal = () => {
    setIsBoardModalOpen(true)
    setIsElipsisOpen(false)
  }

  const setOpenDelteModal = () => {
    setIsDeteleModalOpen(true)
    setIsElipsisOpen(false)
  }

  const onDeleteBtnClick = () => {
    dispatch(boardsSlice.actions.deleteBoard())
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }))
    setIsDeteleModalOpen(false)
  }

  const onDropdownClick = () => {
    setOpenDropdown((state) => !state)
    setIsElipsisOpen(false)
    setBoardType('add')
  }

  return (
    <div
      className="p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0"
      onClick={(e) => {
        if (isBoardModalOpen) {
          setIsBoardModalOpen(false)
        }
        if (isElipsisOpen) {
          setIsElipsisOpen(false)
        }
      }}
    >
      <header className="flex justify-between dark:text-white items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={logo} alt="logo" className="h-6 w-6" />
          <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl">
            Kanban
          </h3>
          <div className="flex items-center">
            <h3 className="truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans">
              {board?.name}
            </h3>
            <img
              src={openDropdown ? iconUp : iconDown}
              alt="dropdown icon"
              className="w-3 ml-2 cursor-pointer md:hidden"
              onClick={onDropdownClick}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex space-x-4 items-center md:space-x-6">
          <button
            className="hidden md:block button"
            onClick={() => {
              setOpenAddEditTask((state) => !state)
              setIsElipsisOpen(false)
              setOpenDropdown(false)
            }}
          >
            + Add new task
          </button>
          <button
            className="button py-1 px-3 md:hidden"
            onClick={() => {
              setOpenAddEditTask((state) => !state)
              setIsElipsisOpen(false)
              setOpenDropdown(false)
            }}
          >
            +
          </button>

          <img
            src={elipsis}
            onClick={() => {
              setBoardType('edit')
              setOpenDropdown(false)
              setIsElipsisOpen((state) => !state)
            }}
            alt="elipsis"
            className="cursor-pointer h-6"
          />

          {isElipsisOpen && (
            <ElipsisMenu
              type={'Board'}
              setOpenDelteModal={setOpenDelteModal}
              setOpenEditModal={setOpenEditModal}
            />
          )}
        </div>
      </header>

      {openDropdown && (
        <HeaderDropdown
          setOpenDropdown={setOpenDropdown}
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}

      {isBoardModalOpen && (
        <AddEditBoardModal
          type={boardType}
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}

      {openAddEditTask && (
        <AddEditTaskModal
          setOpenAddEditTask={setOpenAddEditTask}
          device={'mobile'}
          type={boardType}
        />
      )}

      {isDeteleModalOpen && (
        <DeleteModal
          setIsDeteleModalOpen={setIsDeteleModalOpen}
          type={'board'}
          onDeleteBtnClick={onDeleteBtnClick}
          title={board?.name}
        />
      )}
    </div>
  )
}

export default Header
