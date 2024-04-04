import React from 'react'

const ElipsisMenu = ({ type, setOpenEditModal, setOpenDelteModal }) => {
  return (
    <div
      className={
        type === 'Boards'
          ? 'absolute top-16 right-5'
          : 'absolute top-16 right-4'
      }
    >
      <div className="flex justify-end items-center">
        <div className="w-40 text-sm z-50 font-medium shadow-md shadow-third bg-white dark:bg-dark space-y-4 py-5 px-4 rounded-lg h-auto pr-12">
          <p
            className="cursor-pointer dark:text-gray-400 text-gray-700"
            onClick={() => {
              setOpenEditModal()
            }}
          >
            Edit {type}
          </p>
          <p
            className="cursor-pointer text-red-500"
            onClick={() => {
              setOpenDelteModal()
            }}
          >
            Delete {type}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ElipsisMenu
