import React from "react"
import { PageHOC } from "../components"

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello From CreateBattle</h1>
    </div>
  )
}

export default PageHOC(
  CreateBattle,
  <>
    Create & Mint
    <br /> A New Battle
  </>,
  <>Summon Your Heroes And Be Ready To Fight Your Opponent</>
)
