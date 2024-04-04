import React from 'react'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import Column from './Column'

const Center = ({
  isBoardModalOpen,
  setIsBoardModalOpen,
  setIsElipsisOpen,
  isElipsisOpen,
}) => {
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ])
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(true)

  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive === true)
  const columns = board?.columns

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  return (
    <div
      className={
        windowSize[0] >= 768 && isSideBarOpen
          ? 'bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6 ml-[261px]'
          : 'bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6'
      }
      onClick={() => {
        if (isBoardModalOpen) {
          setIsBoardModalOpen(false)
        }
        if (isElipsisOpen) {
          setIsElipsisOpen(false)
        }
      }}
    >
      {windowSize[0] >= 768 && <SideBar />}

      {/* Columns Section */}

      {columns.map((col, index) => (
        <Column key={index} colIndex={index} />
      ))}
    </div>
  )
}

export default Center
