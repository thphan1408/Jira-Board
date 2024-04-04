import React from 'react'

const DeleteModal = ({
  type,
  setIsDeteleModalOpen,
  title,
  onDeleteBtnClick,
}) => {
  return (
    // Modal Container
    <div
      className="fixed top-0 left-0 right-0 bottom-0 scrollbar-hide px-2 py-4 overflow-scroll flex justify-center items-center bg-[#00000080] z-50"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        setIsDeteleModalOpen(false)
      }}
    >
      {/* Delete Modal */}
      <div className="scrollbar-hide overflow-y-scroll max-w-md max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white w-full px-8 py-8 rounded-xl">
        <h3 className="font-bold text-red-500 text-xl">Delete this {type}?</h3>
        {type === 'task' ? (
          <p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
            Are you sure you want to delele the "{title}" task and its subtasks?
            This action cannot be reversed.
          </p>
        ) : (
          <p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
            Are you sure you want to delele the "{title}" board? Will remove all
            columns and tasks and cannot be reversed.
          </p>
        )}

        {/* Buttons */}
        <div className="flex w-full mt-4 items-center justify-center space-x-4">
          <button
            onClick={onDeleteBtnClick}
            className="w-full items-center text-white hover:opacity-75 font-semibold bg-red-500 py-2 rounded-full"
          >
            Delete
          </button>
          <button
            onClick={() => {
              setIsDeteleModalOpen(false)
            }}
            className="w-full items-center text-primary hover:opacity-75 bg-[#635fc71a] py-2 rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
