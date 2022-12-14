import React from "react"
import Box from "./components/Box.js"
import Button from "./components/Button.js"

export default function App() {
  const [color, setColor] = React.useState(["white", "white", "white", "white"]);

  function smallTimeDj() {
    // setColor(prevColor => prevColor === "black" ? "white" : "black")
    setColor(prevColor => {if(prevColor[0] === "white"){return [
      "black",
      "black",
      "black",
      "black"]
      } else {  
          return [
          "white",
          "white",
          "white",
          "white"]
          }
       }
      );
  }

  function partyDj() {
    setColor(prevColor => {return ["purple", "purple", prevColor[2], prevColor[3]]})
  }

  function professionalDjLeft() {
    setColor(prevColor => {return [prevColor[0], prevColor[1], "blue", prevColor[3]]})
  }

  function professionalDjRight() {
    setColor(prevColor => {return [prevColor[0], prevColor[1], prevColor[2], "blue"]})
  }

  function bigTimeDjTopLeft() {
    setColor(prevColor => {return ["pink", prevColor[1], prevColor[2], prevColor[3]]})
  }

  function bigTimeDjTopRight() {
    setColor(prevColor => {return [prevColor[0], "orange", prevColor[2], prevColor[3]]})
  }

  function bigTimeDjBottomLeft() {
    setColor(prevColor => {return [prevColor[0], prevColor[1], "teal", prevColor[3]]})
  }

  function bigTimeDjBottomRight() {
    setColor(prevColor => {return [prevColor[0], prevColor[1], prevColor[2], "lime"]})
  }

  function playSounds() {

  }

  // <Box color={color[0]}/>
  // <Box color={color[1]}/>
  // <Box color={color[2]}/>
  // <Box color={color[3]}/>

  
  // const box = color.map((color) => <Box color={color} />)



  return (
    <div>
      <div className="box-container">
        <Box color={color[0]} />
        <Box color={color[1]} />
        <Box color={color[2]} />
        <Box color={color[3]} />
      </div>
      <div className="button-container">
        <Button className="button" handleClick={smallTimeDj} buttonName="DJ Small"/>
        <Button className="button" handleClick={partyDj} buttonName="Party DJ"/>
        <Button className="button" handleClick={professionalDjLeft} buttonName="Left Blue DJ"/>
        <Button className="button" handleClick={professionalDjRight} buttonName="Right Blue DJ"/>
        <Button className="button" handleClick={bigTimeDjTopLeft} buttonName="Big DJ one"/>
        <Button className="button" handleClick={bigTimeDjTopRight} buttonName="Big DJ two"/>
        <Button className="button" handleClick={bigTimeDjBottomLeft} buttonName="Big DJ three"/>
        <Button className="button" handleClick={bigTimeDjBottomRight} buttonName="Big DJ four"/>
      </div>

    </div>
  )
}