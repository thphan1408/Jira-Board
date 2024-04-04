import React, { useState } from 'react'
import boardIcon from '../assets/icon-board.svg'
import lightIcon from '../assets/icon-light-theme.svg'
import darkIcon from '../assets/icon-dark-theme.svg'
import { Switch } from '@headlessui/react'
import useDarkMode from '../hooks/useDarkMode'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../redux/boardsSlice'

const HeaderDropdown = ({ setOpenDropdown, setIsBoardModalOpen }) => {
  // set theme dark/light
  const [colorTheme, setTheme] = useDarkMode()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false,
  )
  const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards)

  const toggleDarKMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <div
      className="py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 bg-[#00000080] z-50"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        setOpenDropdown(false)
      }}
    >
      {/* Dropdown modal */}
      <div className="bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rounded-xl">
        <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
          All boards ({boards?.length})
        </h3>

        {/* Board name */}
        <div className="">
          {/* Chỗ này sẽ map ra các danh sách board name */}
          {boards.map((board, index) => (
            <div
              className={`flex items-baseline space-x-2 px-5 py-4  ${
                board.isActive && 'bg-primary rounded-r-full text-white mr-8'
              } `}
              key={index}
              onClick={() => {
                dispatch(boardsSlice.actions.setBoardActive({ index }))
              }}
            >
              <img src={boardIcon} className="h-4"></img>
              <p className=" text-lg font-bold  ">{board.name}</p>
            </div>
          ))}

          <div
            className="flex items-baseline space-x-2 text-primary px-5 py-4 cursor-pointer"
            onClick={() => {
              setIsBoardModalOpen(true)
              setOpenDropdown(false)
            }}
          >
            <img src={boardIcon} alt="" className="h-4" />
            <p className="text-lg font-bold">Create new board</p>
          </div>

          {/* Dark mode */}
          <div className="mx-2 p-4 space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
            <img src={lightIcon} alt="light icon" />

            <Switch
              className={`${
                darkSide ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
              checked={darkSide}
              onChange={toggleDarKMode}
            >
              <span
                className={`${
                  darkSide ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full transition`}
              ></span>
            </Switch>

            <img src={darkIcon} alt="dark icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDropdown
