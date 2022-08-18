import React from 'react'
import {FaPencilAlt} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-[full] flex px-2 py-8 justify-between font-bold text-[#edf2f4]'>
        <div className='text-4xl flex flex-row gap-1'>
          <FaPencilAlt />
          <h1>DNote</h1>
        </div>
    </div>
  )
}

export default Navbar
