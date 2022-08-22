import {MdDelete} from 'react-icons/md'

const Task = (props) => {
  return (
    <div className='flex items-center text-white'>
      <div className=' bg-[#223C60] flex-1 flex w-[70%] rounded-[15px] mb-[10px]'>
        <div className='flex items-center justify-between w-full p-[20px] text-xl'>
          <p>{props.noteContent}</p>
        </div>
      </div>
      <MdDelete
        className='text-3xl cursor-pointer ml-6 sm:ml-8 sm:mr-2 mr-1'
        onClick={props.onClick}
      />
    </div>
  )
}

export default Task
