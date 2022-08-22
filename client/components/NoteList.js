import Navbar from './Navbar';
import Note from './Note';
import { IoMdAddCircle } from 'react-icons/io'

const NoteList = (props) => <div className='w-[70%] bg-[#000000] py-4 px-9 rounded-[20px] overflow-y-scroll'>
  <Navbar />
  <div className='py-3 text-white'>TODAY&apos;S NOTES</div>
  <form className='flex items-center justify-center'>
    <input
      className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#555b6e] text-white mb-[10px]'
      placeholder='Take a note...'
      value={props.userInput}
      onChange={e => props.setUserInput(e.target.value)}
    />
    <IoMdAddCircle
      className='text-white text-[50px] cursor-pointer ml-[20px] mb-[10px]'
      onClick={props.addNote}
    />
  </form>
  <div>
    {props.notes.map(currNote => (
      <Note key={currNote.id} noteContent={currNote.noteContent} />
    ))}
  </div>
</div>

export default NoteList