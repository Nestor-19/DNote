import { BsFillTrashFill } from 'react-icons/bs'

const Task = (props) => {
  return (
    <div className='flex items-center text-white'>
      <div className=' bg-[#223C60] flex-1 flex w-[70%] rounded-[15px] mb-[10px]'>
        <div className='flex items-center justify-between w-full p-[20px] text-xl'>
          <p>{props.noteContent}</p>
        </div>
      </div>
      <BsFillTrashFill
        className='text-2xl cursor-pointer ml-10'
      />
    </div>
  )
}

export default Task
