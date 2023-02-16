import React from "react"
import Callout from './components/Callout'

export default function App() {
  const [gradient, setGradient] = React.useState({
    color1: '#0cc08a',
    color2: '#852692',
    angle: '0'
  })

  function handleChange(event) {
    const {name, value} = event.target
    setGradient(prevGradient => ({
      ...prevGradient,
      [name]: value
    }))
    console.log(gradient)
  }

  const addColor = () => {
    // setGradient([...gradient, {
    //   // color1: '#ffffff',
    //   // color2: '#000000',
    //   color3: '#000000'
    //   // angle: '0'
    // }])
    setGradient(...gradient, {color3: '#000000'})
    console.log(gradient)
    return (<div><input className="color3" type="color" name="color3" id="color3" onChange={handleChange} /><span></span></div>)
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

