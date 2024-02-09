import React from 'react'
import connectw from '../components/wallet.js'

function walletconnect() {
    function connectWallet() {
        connectw();
    }
  return (
    <div>
      <button onClick={()=>connectWallet}>
       Wallet
      </button>
    </div>
  )
}

export default walletconnect
