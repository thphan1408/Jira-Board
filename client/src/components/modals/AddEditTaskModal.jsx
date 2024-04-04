import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import crossIcon from '../../assets/icon-cross.svg'
import { useSelector, useDispatch } from 'react-redux'
import boardsSlice from '../../redux/boardsSlice'

const AddEditTaskModal = ({
  type,
  device,
  setOpenAddEditTask,
  prevColIndex = 0,
  taskIndex,
}) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [newColIndex, setNewColIndex] = useState(prevColIndex)
  const [subTasks, setSubTasks] = useState([
    { id: uuidv4, title: '', isCompleted: false },
  ])

  const board = useSelector((state) => state.boards).find(
    (board) => board.isActive,
  )
  const columns = board?.columns
  // const col = columns.find((col, index) => index === prevColIndex)
  const [status, setStatus] = useState(columns[prevColIndex].name)

  const onDelete = (id) => {
    setSubTasks((prevSate) => {
      return prevSate.filter((element) => element.id !== id)
    })
  }

  const onChange = (id, newValue) => {
    setSubTasks((prevSate) => {
      const newSate = [...prevSate]
      const subTask = newSate.find((subTask) => subTask.id === id)
      subTask.title = newValue
      return newSate
    })
  }

  const onChangeStatus = (event) => {
    setStatus(event.target.value)
    setNewColIndex(event.target.selectedIndex)
  }

  const validate = () => {
    setIsValid(false)
    if (!title.trim()) {
      return false
    }

    for (let i = 0; i < subTasks.length; i++) {
      if (!subTasks[i].title.trim()) {
        return false
      }
    }

    setIsValid(true)
    return true
  }

  const onSubmit = (type) => {
    if (type === 'add') {
      dispatch(
        boardsSlice.actions.addTask({
          title,
          description,
          subTasks,
          status,
          newColIndex,
        }),
      )
    } else {
      dispatch(
        boardsSlice.actions.editTask({
          title,
          description,
          subTasks,
          status,
          taskIndex,
          prevColIndex,
          newColIndex,
        }),
      )
    }
  }

  return (
    <div
      className={
        device === 'mobile' &&
        'py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-[-100vh] top-0 bg-[#00000080]'
      }
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        setOpenAddEditTask(false)
      }}
    >
      {/* Modal Section */}
      <div
        className="
        scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-sm shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl
      "
      >
        <h3 className="text-lg">
          {type === 'edit' ? 'Edit Task' : 'Add New'} Task
        </h3>

        {/* Task Name */}
        <div className="mt-8 flex flex-col space-y-1">
          <label className="text-sm dark:text-white text-gray-500">
            Task Name
          </label>

          <input
            type="text"
            value={title}
            className="bg-transparent py-2 px-4 outline-none focus:border-0 rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            placeholder="e.g Fix bugs in the codebase"
          />
        </div>

        {/* Description */}
        <div className="mt-8 flex flex-col space-y-1">
          <label className="text-sm dark:text-white text-gray-500">
            Description
          </label>

          <textarea
            value={description}
            className="bg-transparent py-2  px-4 outline-none focus:border-0 min-h-[200px] rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
            onChange={(event) => {
              setDescription(event.target.value)
            }}
            placeholder="e.g Fix bugs in the codebase"
          />
        </div>

        {/* Subtasks Section */}

        <div className="mt-8 flex flex-col space-y-1">
          <label className="text-sm dark:text-white text-gray-500">
            Subtasks
          </label>

          {subTasks.map((subTask) => (
            <div className="flex items-center w-full" key={subTask.id}>
              <input
                onChange={(event) => {
                  onChange(subTask.id, event.target.value)
                }}
                type="text"
                value={subTask.title}
                className="bg-transparent outline-none focus:border-0 border  flex-grow px-4 py-2 rounded-md text-sm border-gray-600 focus:outline-primary"
                placeholder="e.g Fix bugs in the codebase"
              />
              <img
                onClick={() => {
                  onDelete(subTask.id)
                }}
                src={crossIcon}
                alt="cross icon"
                className="m-4 cursor-pointer"
              />
            </div>
          ))}

          <button
            className="w-full items-center dark:text-primary dark:bg-white text-white bg-primary py-2 rounded-full"
            onClick={() => {
              setSubTasks((state) => [
                ...state,
                { id: uuidv4(), title: '', isCompleted: false },
              ])
            }}
          >
            + Add new subtask
          </button>
        </div>

        {/* Current status section */}
        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">
            Current status
          </label>
          <select
            value={status}
            onChange={(event) => onChangeStatus(event)}
            className="select-status flex flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0 border border-gray-300 focus:outline-primary outline-none"
          >
            {columns?.map((column, index) => (
              <option value={column.name} key={index}>
                {column.name}
              </option>
            ))}
          </select>

          <button
            className="w-full items-center dark:text-primary dark:bg-white text-white bg-primary py-2 rounded-full"
            onClick={() => {
              const isValid = validate()
              if (isValid) {
                onSubmit(type)
                setOpenAddEditTask(false)
              }
            }}
          >
            {type === 'edit' ? 'Save Edit' : 'Create New Task'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEditTaskModal
