import { ethers } from 'ethers'
import { useState } from 'react'
import WrongNetworkMessage from '../components/WrongNetworkMessage'
import ConnectWalletButton from '../components/ConnectWalletButton'
import NoteList from '../components/NoteList'
import NoteAbi from '../../backend/build/contracts/NoteContract.json'
import { NoteContractAddress } from '../config'


export default function Home() {
  const [rightNetwork, setRightNetwork] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currAccount, setCurrAccount] = useState('');
  const [userInput, setUserInput] = useState('');
  const [notes, setNotes] = useState([]);

  // Triggers Metamask popup for user to connect their wallet
  const connectWallet = async () => {

    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }

    try{
      const { ethereum } = window;
      if (!ethereum){
        console.log("MetaMask not detected")
        return;
      }

      let chainId = await ethereum.request({method: 'eth_chainId'});
      console.log("Connected to chain", chainId);
      const rinkebyChainId = '0x4';

      if (chainId !== rinkebyChainId){
        alert("You aren't connected to the rinkeby testnet!");
        setRightNetwork(false);
        return;
      }
      else{
        // User has successfully connected to the Rinkeby Testnet
        setRightNetwork(true);
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      // User has logged in using one of their accounts
      console.log('Account logged in: ', accounts[0]);
      setUserLoggedIn(true);
      setCurrAccount(accounts[0]);
    }
    catch (error){
      console.log("MetaMask Connection Failed!");
    }
  }


   // Adds tasks from front-end onto the blockchain
   const addNote = async e => {
    e.preventDefault()

    let note = {
      noteContent: userInput,
      isDeleted: false
    }

    try {
      const {ethereum} = window;
      if (ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const NoteContract = new ethers.Contract(NoteContractAddress, NoteAbi.abi, signer);

        // Call the addNote function from NoteContract.sol
        NoteContract.addNote(note.noteContent, note.isDeleted)
        .then(res => {
          setNotes([...notes, note]);
          console.log("Successfully Added Note");
        })
        .catch(err => {
          console.log(err);
        })
      }
      else{
        console.log('ethereum does not exist!');
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  // Just gets all the tasks from the contract
  const getAllNotes = async () => {

  }

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteNote = key => async () => {

  }

  return (
    <div className='bg-[#062F4F] h-screen w-screen flex justify-center py-6'>
      {!userLoggedIn ? <ConnectWalletButton connect={connectWallet} /> : 
        rightNetwork ? <NoteList userInput={userInput} setUserInput={setUserInput} addNote={addNote}/> : <WrongNetworkMessage />}
    </div>
  )
}

