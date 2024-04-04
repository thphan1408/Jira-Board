import React from 'react'
import { useSelector } from 'react-redux'
import TaskModal from './modals/TaskModal'

const Task = ({ taskIndex, colIndex }) => {
  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive)
  const columns = board?.columns
  const col = columns.find((col, i) => i === colIndex)
  const task = col.tasks.find((task, i) => i === taskIndex)

  const [isTaskModalOpen, setIsTaskModalOpen] = React.useState(false)

  let compeleted = 0
  let subTasks = task.subtasks
  subTasks.forEach((subTask) => {
    if (subTask.isCompleted) {
      compeleted++
    }
  })

  return (
    <div>
      <div
        className="w-[200px] first:my-5 rounded-lg bg-white dark:bg-[#2b2c37] shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer"
        onClick={() => {
          setIsTaskModalOpen((state) => !state)
        }}
      >
        <p className="font-bold tracking-wide">{task.title}</p>

        <p className="font-bold text-xs tracking-tighter mt-2 text-gray-500">
          {compeleted} of {subTasks.length} completed task
        </p>
      </div>

      {isTaskModalOpen && (
        <TaskModal
          colIndex={colIndex}
          taskIndex={taskIndex}
          setIsTaskModalOpen={setIsTaskModalOpen}
        />
      )}
    </div>
  )
}

export default Task
