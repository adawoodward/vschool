import React from "react"
import { Component } from "react";


function Edit(props) {
    return (
        <span>
            {
                props.showInputTop ? (
                    <input
                    type="text"
                    value={props.value}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    autoFocus
                    />
                ) : (
                    <span
                    onDoubleClick={props.handleDoubleClick}
                    style={{
                        display: "inline-block",
                        height: "25px",
                        minWidth: "300px"
                    }}
                    >{props.value}</span>
                )
            }
        </span>
    )
}

export default Edit