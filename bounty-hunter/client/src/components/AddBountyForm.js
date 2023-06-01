import React, { useState } from "react"

export default function AddBountyForm(props) {
    const initInputs = { 
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        bountyAmount: props.bountyAmount || "",
        type: props.type || "",
        living: true
        // checked: props.checked 
    }
    const [inputs, setInputs] = useState(initInputs)

    // const [checked, setChecked] = useState(false)

    // const handleCheckedChange = () => {
    //     setChecked(!checked)
    // }

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: type === "checkbox" ? checked : value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Sith or Jedi"
            />
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />

            <label> Living?:
                <input 
                    type="checkbox"
                    checked={inputs.living}
                    onChange={handleChange}
                    // value="true"
                    name="living"
                />
                Alive
            </label>


            {/* <Checkbox 
                label="My Value"
                value={checked}
                onChange={handleCheckedChange}
            /> */}

            {/* <label> Living:
            <input 
                type="radio" 
                name="myRadio" 
                value={true}
                onChange={handleChange}
            />
                True            
            </label>
            <label>
            <input
                type="radio"
                name="myRadio"
                // value={inputs.living}
                onChange={handleChange}
                value={false}
                // value="false"
                // defaultChecked={true} 
            />
                False
            </label> */}
            <br></br>
            <button>{props.btnText}</button>
        </form>
    )

}