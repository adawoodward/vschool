import React from "react"
import FormUglyThings from './components/FormUglyThings'
import List from './components/List'
import { ContextProvider } from "./Context"
import axios from "axios"


function App(props) {
  return (
    <div>
      <ContextProvider>
      <h2 style={{textAlign: "center"}}>Grogu Things</h2>
      <FormUglyThings />
      <List />
      </ContextProvider>
    </div>
  )
}

export default App