import WrongNetworkMessage from '../components/WrongNetworkMessage'
import ConnectWalletButton from '../components/ConnectWalletButton'
import NoteList from '../components/NoteList'
import NoteAbi from '../../backend/build/contracts/NoteContract.json'
import { NoteContractAddress } from '../config'
import { ethers } from 'ethers'


/* 
const tasks = [
  { id: 0, taskText: 'clean', isDeleted: false }, 
  { id: 1, taskText: 'food', isDeleted: false }, 
  { id: 2, taskText: 'water', isDeleted: true }
]
*/

export default function Home() {

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {

  }

  // Just gets all the tasks from the contract
  const getAllNotes = async () => {

  }

  // Add tasks from front-end onto the blockchain
  const addNote = async e => {

  }

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteNote = key => async () => {

  }

  return (
    <div className='bg-[#062F4F] h-screen w-screen flex justify-center py-6'>
      {!'is user not logged in?' ? <ConnectWalletButton /> :
        'is this the correct network?' ? <NoteList /> : <WrongNetworkMessage />}
    </div>
  )
}

