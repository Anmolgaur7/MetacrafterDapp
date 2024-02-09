import { ethers } from 'ethers';
import {detectProvider} from '@metamask/detect-provider';

async function connectWallet() {
    try {
      if (window.ethereum) {
        console.log('MetaMask is installed!');
        const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
  
        // Access the user's accounts
        const accounts = await ethersProvider.listAccounts();
  
        if (accounts.length > 0) {
          console.log('Connected account:', accounts[0]);
  
          // Now you can interact with Ethereum using ethers.js
          // For example, deploy a contract or send a transaction
        } else {
          console.log('No accounts found. Please unlock MetaMask.');
        }
      } else {
        console.log('MetaMask not detected. Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error.message);
    }

  }

// Call the function to connect the wallet
export default connectWallet();
