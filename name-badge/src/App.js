import React from "react"
// import Form from './Form'

export default function App() {
//   return (
//     <Form/ >
//   )
// }
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      comments: ""
    }
  )

  const [badges, setBadges] = React.useState("")
  // const badges = formData.map((badge)=> <div key={badge}>{badge}</div>)

  const [color, setColor] = React.useState("#000")
  const getRgb = () => Math.floor(Math.random() * 256)
  const rgbToHex = (r, g, b) => "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex
  }).join('');


  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)

    setBadges(prevBadges => {
      return [
        ...prevBadges,
        <div className="badges" style={{backgroundColor: color}} >Badge
          <p> Name: {formData.firstName} {formData.lastName}</p>
          <p> Phone: {formData.phone}</p>
          <p> Place of birth: {formData.placeOfBirth}</p>
          <p> Favorite food: {formData.favoriteFood}</p>
          <p> Email: {formData.email}</p>
          <div className="comments"> {formData.comments} </div>
          <br></br>
        </div>
      ]
    })
    
    setFormData(
      {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        comments: ""
      }
    )
  }
  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb()
    }
    setColor(rgbToHex(color.r, color.g, color.b))
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          minLength={3}
          // minlength="3"
          required={true}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          // min={3}
          // validate={minLength(3)}
          // required="required"
          // required={true}
        />
        <input
          minLength="3"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          required={true}
        />
        <br></br>
        <input 
          minLength={3}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          required={true}
        />
        <input 
          minLength="3"
          type="text"
          placeholder="Place of birth"
          onChange={handleChange}
          name="placeOfBirth"
          value={formData.placeOfBirth}
          required={true}
        />
        <br></br>
        <input 
          minLength="3"
          type="number"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
          required={true}
        />
        <input 
          minLength="3"
          type="text"
          placeholder="Favorite Food"
          onChange={handleChange}
          name="favoriteFood"
          value={formData.favoriteFood}
          required={true}
        />
        <br></br>
        <textarea
          minLength="3"
          placeholder="Tell us about yourself"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
          required={true}
        />
        <br></br>
        <button type="submit" className="form--submit" onClick={handleGenerate}>
          Submit
        </button>      
      </form>
      <div>
          {badges}
          <br></br>
      </div>
    </div>
  )
}