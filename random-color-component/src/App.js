import React from "react"

export default function App() {
  const [colorData, setColorData] = React.useState({})
  const [color, setColor] = React.useState()

  React.useEffect(function() {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColorData(data))
  }, [color])

  console.log(colorData)

  // const backgroundColor = {
  //   backgroundColor: `#${colorData}`
  // }

  function colorHandleChange() {
    setColor(prevState => !prevState)
  }

  return (
    <div onClick={colorHandleChange} style={{backgroundColor: `#${colorData}`}}>
      <h2>The color is {colorData}</h2>
      {/* <button onClick={() => setColor(prevColor => prevColor + 1)}>Get Next Color</button> */}
      <pre>{JSON.stringify(colorData, null, 2)}</pre>
    </div>
  )
}
