import React from 'react'
import { Link } from 'react-router-dom'
import ToolTips from '../components/tooltip/ToolTips'

const Header = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <nav className="bg-blue border-gray-200 dark:bg-gray-900">
        <div className="min-h-screen flex flex-col justify-between items-center pt-6 pb-5">
          <div className="flex flex-col items-center w-16">
            <div className="pb-2">
              <Link
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 w-8"
                  alt="Flowbite Logo"
                />
              </Link>
            </div>

            <div className="min-h-[42px] flex items-center">
              <Link
                to="#"
                className="text-gray-900 rounded-full p-1 hover:bg-blueGray md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Link>
            </div>

            <div className="min-h-[42px] flex items-center">
              <Link
                href="#"
                className="text-gray-900 rounded-full p-1 hover:bg-blueGray md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <ToolTips content="Thành Phan">
              <div className="flex text-sm bg-gray-800 rounded-full md:me-0 hover:ring-4 hover:ring-gray-300 dark:focus:ring-gray-600">
                <img
                  className="w-8 h-8 rounded-full"
                  src="src/assets/images/139509862_754602102119322_7269651953075807327_n-min.jpg"
                  alt="user photo"
                />
              </div>
            </ToolTips>

            <ToolTips content="About">
              <div className="flex text-sm bg-transparent rounded-full md:me-0 hover:ring-4 hover:ring-gray dark:focus:ring-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white dark:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
            </ToolTips>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
