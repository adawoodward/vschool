import React from "react"
import DiceBox from "./components/DiceBox.js";

export default function App() {

  const [numbers, setNumbers] = React.useState([null, null, null, null, null]);

  function redo() {
    setNumbers(prevNumbers => [null, null, null, null, null])
  }

  return (
    <div>
      <div className="randomNumber-container">
        <DiceBox />
        <DiceBox />
        <DiceBox />
        <DiceBox />
        <DiceBox />
      </div>
      <div className="button-container">
        <button className="button" onClick={redo}>Roll</button>
      </div>
    </div>
  )
}
