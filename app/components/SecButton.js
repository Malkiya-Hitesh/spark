import React from 'react'

function SecButton({ children, className = '', ...props }) {
  return (
    <button 
      className={`border-2 border-[var(--bg-color)] text-[var(--bg-color)] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[var(--bg-color)] hover:text-[var(--main-color)] transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecButton