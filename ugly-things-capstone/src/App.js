import React from "react"
import Form from './components/Form'
import List from './components/List'
import { ContextProvider } from "./Context"

function App(props) {
  return (
    <div>
      <ContextProvider>
      <h2>Ugly Things</h2>
      <Form />
      <List />
      </ContextProvider>
    </div>
  )
}

export default App