import React from 'react'
import {FaPencilAlt} from "react-icons/fa";

const Navbar = (props) => {

  const currentUser = props.currAccount.slice(0, 5) + '...';

  return (
    <div className='w-[full] flex px-2 py-8 justify-between font-bold text-[#edf2f4]'>
        <div className='text-4xl flex flex-row gap-1'>
          <FaPencilAlt />
          <h1>DNote</h1>
        </div>
        <div className='pt-[3%] sm:pt-[0.5%] text-xs sm:text-[15px] sm:pl-[20%] pl-[18%]'>
          <div className='py-1 px-4 border rounded-md'>
            <p>{currentUser}</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar
