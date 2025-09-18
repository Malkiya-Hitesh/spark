import React from 'react'

function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`bg-[var(--bg-color)] text-[var(--main-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--bg-color)]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button