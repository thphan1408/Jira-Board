import React, { useRef } from 'react'

const ToolTips = ({ children, content }) => {
  const tooltipRef = useRef(null)

  const handleMouseEnter = () => {
    tooltipRef.current.classList.remove('invisible')
    tooltipRef.current.classList.add('visible')
  }

  const handleMouseLeave = () => {
    tooltipRef.current.classList.remove('visible')
    tooltipRef.current.classList.add('invisible')
  }

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center justify-center cursor-pointer w-full min-h-[42px] dark:text-white"
      >
        {children}
      </div>
      <div className="">
        <div
          ref={tooltipRef}
          role="tooltip"
          className="absolute z-10 invisible top-0 left-full mx-3.5 transform -translate-x-50 py-2 px-5 text-sm font-medium text-white bg-slate-400 rounded-lg shadow-sm opacity-1 tooltip dark:bg-gray-700 whitespace-nowrap"
        >
          {content}
          <div
            className="tooltip-arrow"
            data-popper-arrow
            style={{ left: '-3px', top: '50%', transform: 'translateY(-50%)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default ToolTips
