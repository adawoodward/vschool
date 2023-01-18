import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            comments: "",
        }
    )
    const [badges, setBadges] = React.useState([])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        console.log(formData)
    } 

    function handleSubmit(event) {
      event.preventDefault() 
      console.log('formData in handleSubmit', formData) 
      console.log(setBadges) 
      setBadges(prevBadges => [...prevBadges, formData])
        // {
        // return [
        //   ...prevBadges,
        //   formData
        //   // firstName: formData.firstName,
        //   // lastName: formData.lastName,
        //   // email: formData.email,
        //   // placeOfBirth: formData.placeOfBirth,
        //   // phone: formData.phone,
        //   // favoriteFood: formData.favoriteFood,
        //   // comments: formData.comments
        // ]
        // }

      console.log(badges)
    }

    const mappedData = badges.map(badge => {
      <div>
        <p>First Name : {badges.firstName}</p>
        <p>Last Name: {badges.lastName}</p>
        <p>Phone: {badges.phone}</p>
        <p>Place of birth: {badges.placeOfBirth}</p>
        <p>Favorite food: {badges.favoriteFood}</p>
        <p>Email: {badges.email}</p>
        <div className="comments"> {badges.comments} </div>
        <br></br>
      </div>
    })

    return (
          <div className="form-container">  
            <form className="form" onSubmit={handleSubmit}>
            {/* <form className="form"> */}
              <input 
                minLength={3}
                // minlength="3"
                required={true}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={badges.firstName}
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
                value={badges.lastName}
                required={true}
              />
              <br></br>
              <input 
                minLength="3"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={badges.email}
                required={true}
              />
              <input 
                minLength="3"
                type="text"
                placeholder="Place of birth"
                onChange={handleChange}
                name="placeOfBirth"
                value={badges.placeOfBirth}
                required={true}
              />
              <br></br>
              <input 
                minLength="3"
                type="number"
                placeholder="Phone"
                onChange={handleChange}
                name="phone"
                value={badges.phone}
                required={true}
              />
              <input 
                minLength="3"
                type="text"
                placeholder="Favorite Food"
                onChange={handleChange}
                name="favoriteFood"
                value={badges.favoriteFood}
                required={true}
              />
              <br></br>
              <textarea
                minLength="3"
                placeholder="Tell us about yourself"
                onChange={handleChange}
                name="comments"
                value={badges.comments}
                required={true}
              />
              <br></br>
              <button type="submit" className="form--submit">
                Submit</button>    
            </form>
            <div>{mappedData}</div>
          </div>
    )
}
       
        // const newfirstName = formData.firstName
        // const newLastName = formData.lastName
        // const newPhone = formData.phone
        // const newPlaceOfBirth = formData.placeOfBirth
        // const newFavoriteFood = formData.favoriteFood
        // const newEmail = formData.email
        // const newComments = formData.comments

        // setFormData(prevFormData => {
        //   return [
        //     ...prevFormData,
        //     <div>{newfirstName}, {newLastName}, {newPhone}, {newPlaceOfBirth}, {newFavoriteFood}, {newEmail}, {newComments}</div>
        //   ]
        // })

        // setFormData(
        //     {
        //       firstName: "",
        //       lastName: "",
        //       email: "",
        //       placeOfBirth: "",
        //       phone: "",
        //       favoriteFood: "",
        //       comments: ""
        //     }
        // )