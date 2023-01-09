import React from "react"

export default function App() {
  const [colorData, setColorData] = React.useState({})
  const [color, setColor] = React.useState()

  React.useEffect(function() {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColorData(data))
  }, [color])

  console.log(colorData.new_color)

  // const myStyle = {
  //   // backgroundColor: `"#${colorData[0]}"`
  //   color: `"#${colorData}"`
  // }

  // function colorHandleChange() {
  //   setColor(prevColor => !prevColor)
  // }

  // function colorHandleChange() {
  //   setColor(prevColor => prevColor + 1)
  // }

  return (
    // <div onClick={colorHandleChange} style={{backgroundColor: `#${colorData}`}}>
    // <div onClick={colorHandleChange} style={{backgroundColor: ["#" + colorData.new_color]}}>
    // <div onClick={colorHandleChange} style={{backgroundColor: "#" + `${colorData.new_color}`}} >
    <div style={{backgroundColor: "#" + `${colorData.new_color}`}} >  
      <h2>The color is #{colorData.new_color}</h2>
      <button onClick={() => setColor(prevColor => prevColor + 1)}>Get Next Color</button>
      <pre>{JSON.stringify(colorData, null, 2)}</pre>
    </div>
  )
}
