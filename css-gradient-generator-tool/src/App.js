

import React from "react"
import Callout from './components/Callout'

export default function App() {
  const [gradient, setGradient] = React.useState({
    color1: '#0cc08a',
    color2: '#852692',
    angle: '0'
  })

  const [color3, setColor3] = React.useState({
    color3: '#ffffff'
  })

  function handleChange(event) {
    const {name, value} = event.target
    setGradient(prevGradient => ({
      ...prevGradient,
      [name]: value
    }))
    console.log(gradient)
  }

  // const addColor = (color) => {
    // const newInputFields = {...gradient, color3: '#ffffff'}
    // newInputFields[color.id] = color
    // setGradient(newInputFields)
  

  // const addColor = () => {
  //   // const values = [...gradient]
  //   // values.push({color3: '#ffffff'})
  //   const color1=gradient.color1
  //   const color2=gradient.color2
  //   const angle=gradient.angle
  //   const newInput={}
  //   newInput={
  //     color3: '#ffffff'
  //   }

  const addColor = () => {
    // setGradient(prevGradient => ({...prevGradient, ...newInput}))
    setGradient({...gradient, ...color3})
    console.log(setGradient)
    console.log(gradient)
    // return (<div><input className="color" type="color" name="color" id="color" onChange={handleChange} value={gradient.color1} /><span></span></div>)
  }



  const cssColor = `background: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2}); 
  -moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color2}, ${gradient.color2}); 
  -webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`

  return (
    <main>
      <h1>CSS Gradient Generator Tool!</h1>
      <Callout>
        <form>
          <span>{gradient.color1}</span>
          <input className="color1" type="color" name="color1" id="color1" value={gradient.color1} onChange={handleChange}/>
          <span>{gradient.color2}</span>
          <input className="color2" type="color" name="color2" id="color2" value={gradient.color2} onChange={handleChange}/>
          <br></br>
          <input className="angle" type="number" name="angle" id="angle" value={gradient.angle} onChange={handleChange}/>
          <button className="addColor" onClick={addColor}> + </button>
        </form>
      </Callout>
      <Callout>
        <div className="rectangle" style={{backgroundImage: `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`}}></div>
      </Callout>
      <Callout>
        <textarea readOnly value={cssColor}/>
      </Callout>
    </main>
  )
}
