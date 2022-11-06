import React from "react"

import { useGlobalContext } from "../context"
import { PageHOC } from "../components"

const Home = () => {
  const { contract, walletAddress } = useGlobalContext()
  return (
    <div>
      <h1 className="text-white text-3xl">{walletAddress}</h1>
    </div>
  )
}

export default PageHOC(
  Home,
  <>
    Welcome To HZ <br /> A Web3 NFT TCG Game
  </>,
  <>
    Conect Your Wallet To Start Playng <br />
    the Ultimate Web3 Card Game
  </>
)
