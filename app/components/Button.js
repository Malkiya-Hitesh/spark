import React from 'react'

function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`bg-[var(--bg-color)] text-[var(--main-color)] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[var(--bg-color)]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button