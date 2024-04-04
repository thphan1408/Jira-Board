import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import crossIcon from '../../assets/icon-cross.svg'
import { useDispatch, useSelector } from 'react-redux'
import boardsSlice from '../../redux/boardsSlice'

const AddEditBoardModal = ({ setIsBoardModalOpen, type }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [newColumns, setNewColumns] = useState([
    {
      id: uuidv4(),
      name: 'Backlog',
      tasks: [],
    },
    { id: uuidv4(), name: 'SELECTED FOR DEVELOPMENT', tasks: [] },
    { id: uuidv4(), name: 'In Progress', tasks: [] },
    { id: uuidv4(), name: 'Done', tasks: [] },
  ])
  const [isValid, setIsValid] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const boards = useSelector((state) => state.boards).find(
    (board) => board.isActive,
  )

  if (type === 'edit' && isFirstLoad) {
    setNewColumns(
      boards.columns.map((col) => {
        return {
          ...col,
          id: uuidv4(),
        }
      }),
    )
    setName(boards.name)
    setIsFirstLoad(false)
  }

  const onChange = (id, newValue) => {
    setNewColumns((prevSate) => {
      const newSate = [...prevSate]
      const column = newSate.find((column) => column.id === id)
      column.name = newValue
      return newSate
    })
  }

  const onDelete = (id) => {
    setNewColumns((prevSate) => {
      return prevSate.filter((element) => element.id !== id)
    })
  }

  const validate = () => {
    setIsValid(false)
    if (!name.trim()) {
      return false
    }

    for (let i = 0; i < newColumns.length; i++) {
      if (!newColumns[i].name.trim()) {
        return false
      }
    }

    setIsValid(true)
    return true
  }

  const onSubmit = (type) => {
    setIsBoardModalOpen(false)
    if (type === 'add') {
      dispatch(boardsSlice.actions.addBoard({ name, newColumns }))
    } else {
      dispatch(boardsSlice.actions.editBoard({ name, newColumns }))
    }
  }
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 scrollbar-hide px-2 py-4 overflow-scroll flex justify-center items-center bg-[#00000080] z-50"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        setIsBoardModalOpen(false)
      }}
    >
      {/* Modal section */}
      <div className="scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl">
        <h3 className="text-lg">
          {type === 'edit' ? 'Edit' : 'Add New'} Board
        </h3>

        {/* Task name */}
        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">
            Board Columns
          </label>
          <input
            type="text"
            className="bg-transparent px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-[#635fc7] outline-1 ring-0"
            placeholder="e.g Website Design"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="board-name-input"
          />
        </div>

        {/* Board Columns */}

        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">
            Board Columns
          </label>
          {newColumns.map((column) => (
            <div key={column.id} className="flex items-center w-full">
              <input
                className="bg-transparent flex-grow px-4 py-2 rounded-md text-sm border border-gray-600 outline-none focus:outline-[#735fc7] outline-1 ring-0"
                onChange={(event) => {
                  onChange(column.id, event.target.value)
                }}
                value={column.name}
                type="text"
              />
              <img
                src={crossIcon}
                alt="cross icon"
                className="cursor-pointer m-4"
                onClick={() => {
                  onDelete(column.id)
                }}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="">
          <button
            className="w-full items-center hover:opacity-75 dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] mt-2 py-2 rounded-full"
            onClick={() => {
              setNewColumns((state) => [
                ...state,
                {
                  id: uuidv4(),
                  name: '',
                  tasks: [],
                },
              ])
            }}
          >
            + Add new column
          </button>

          <button
            className="w-full items-center hover:opacity-75 dark:text-[#635fc7] mt-8 py-2 relative dark:bg-white text-white bg-[#635fc7] rounded-full"
            onClick={() => {
              const isValid = validate()
              if (isValid) onSubmit(type)
            }}
          >
            {type === 'add' ? 'Create New Board' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEditBoardModal
