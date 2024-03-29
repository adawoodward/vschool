import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props) {
    const { firstName, lastName, _id, bountyAmount, type, living } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
                <h1>First Name: {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <p>Living: {living.toString()}</p>
                <p>Bounty Amount: {bountyAmount}</p>
                <p>Type: {type}</p>
                <button className="delete-btn"
                onClick={() => props.deleteBounty(_id)}>Delete</button>
                 <button className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddBountyForm 
                firstName={firstName}
                lastName={lastName}
                _id={_id}
                type={type}
                living={living}

                // living={checked}
                // checked="true"
                bountyAmount={bountyAmount}
                btnText="Submit Edit"
                submit={props.editBounty}
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
        }
        </div>
    )
}