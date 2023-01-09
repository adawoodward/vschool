import React from "react"

export default function App() {
  const [formData, setFormData] = React.useState(
    {
      name: ""
    }
  )

  const [nameList, setNameList] = React.useState("")

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: value
      }
    })
  }

  // const nameElements = nameList.map(name => <li key={name}>{formData.name}</li>)

  function handleSubmit(event) {
    event.preventDefault()
    // setNameList(`${formData.name}`)
    // if (formData.name.length > 0) {
    //   <li>{formData.name}</li>
    // }
    setNameList(prevNameList => {
      // if (formData.name.length > 0) {
      //   return [
      //     ...prevNameList, 
      //     <li>{formData.name}</li>
      //   ]
      // }
      return [
        ...prevNameList, 

        <li>{formData.name}</li> 
      ]
    })
    setFormData(
      {
        name: ""
      }
    )
    
    // document.getElementsByClassName('form--input').value = '';
    // event.target.value = "";
    // input.value = "";
    // event.target = "";
    // [event.target.name] = "";
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form--input"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <h1>{formData.name}</h1>

      </form>
      <div>
        <button className="form--submit" onClick={handleSubmit}>
          Submit
        </button>
        <div className="running--list">
          <ul>
            {/* {
              nameList.length && 
              <li>{nameList}</li>
            } */}
            {nameList}
        
          </ul>
        </div>
      </div>
    </div>
  )
}