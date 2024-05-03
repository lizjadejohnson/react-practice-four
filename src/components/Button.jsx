import React from 'react'

function Button({action, icon}) {
  return (
    // onClick, do the action we passed in:
    <button className="btn" onClick={action}>
        {/* Display the icon passed in: */}
        {icon}
        
        </button>
  )
}
export default Button