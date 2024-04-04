import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TaskModal = ({ colIndex, taskIndex, setIsTaskModalOpen }) => {
  const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive)
  const columns = board?.columns
  const col = columns.find((column, i) => colIndex === i)
  const task = col.tasks.find((col, i) => taskIndex === i)
  const subTasks = task.subtasks

  let compeleted = 0
  subTasks.forEach((subTask) => {
    if (subTask.isCompleted) {
      compeleted++
    }
  })

  const [status, setStatus] = React.useState(task.status)
  const [newColIndex, setNewColIndex] = React.useState(columns.indexOf(col))

  return (
    <div
      className="fixed right-0 left-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide z-50 bottom-0 justify-center flex bg-[#00000080]"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return
        setIsTaskModalOpen(false)
      }}
    >
      {/* Modal section */}

      
    </div>
  )
}

export default TaskModal
