import React from 'react'

function SecButton({ children, className = '', ...props }) {
  return (
    <button 
      className={`border-2 border-[var(--bg-color)] text-[var(--bg-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--bg-color)] hover:text-[var(--main-color)] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecButton