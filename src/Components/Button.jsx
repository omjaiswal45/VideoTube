import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="bg-gray-500 text-white px-2 py-2 rounded-lg hover:bg-gray-600 transition duration-200 ease-in-out cursor-pointer mx-1 my-4">
        {name}
      </button>
      
    </div>
  )
}

export default Button