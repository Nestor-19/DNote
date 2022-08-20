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
      {'is user not logged in?' ? <ConnectWalletButton connect={connectWallet} /> :
        'is this the correct network?' ? <NoteList /> : <WrongNetworkMessage />}
    </div>
  )
}

