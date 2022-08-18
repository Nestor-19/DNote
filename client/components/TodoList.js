import Navbar from './Navbar'
import { IoMdAddCircle } from 'react-icons/io'

const TodoList = () => <div className='w-[70%] bg-[#000000] py-4 px-9 rounded-[30px] overflow-y-scroll'>
  <Navbar />
  <div className='py-3 text-white'>TODAY&apos;S NOTES</div>
  <form className='flex items-center justify-center'>
    <input
      className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#555b6e] text-white mb-[10px]'
      placeholder='Take a note...'
      // take input from the form here
    />
    <IoMdAddCircle
      // Add an onClick method
      className='text-white text-[50px] cursor-pointer ml-[20px] mb-[10px]'
    />
  </form>
  <ul>
    {/* Loop through all tasks here using the Task component */}
  </ul>
</div>

export default TodoList