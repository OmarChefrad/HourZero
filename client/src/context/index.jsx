import React, { createContext, useContext, useState, useEffect } from "react"
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { useNavigate } from "react-router-dom"

import { ABI, ADDRESS } from "../contract"

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [walletAdress, setWalletAddress] = useState("")
  const [provider, setProvider] = useState("")
  const [contract, setContract] = useState("")

  const updateCurrentWalletAddress = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    console.log(accounts)
    // if (accounts) setWalletAddress(accounts[0])
  }

  // Set the Wallet Address to the state
  useEffect(() => {
    updateCurrentWalletAddress()

    window.ethereum.on("accountsChanged", updateCurrentWalletAddress)
  }, [])

  // Set the smart contract to the State
  useEffect(() => {
    const setSmartContractAndProvider = async () => {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const newProvider = new ethers.providers.Web3Provider(connection)
      const signer = newProvider.getSigner()
      const newContract = new ethers.Contract(ADDRESS, ABI, signer)

      setProvider(newProvider)
      setContract(newContract)
    }
    setSmartContractAndProvider()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        contract,
        walletAdress,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
