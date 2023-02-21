import React, {useContext} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Button from "./components/Button"
import Footer from "./components/Footer"
import { ThemeContext, ThemeContextProvider } from "./components/themeContext"

function App(props) {
  const {color} = useContext(ThemeContext)
  return (
    <div className={`${color}-theme`}>
      <ThemeContextProvider>
        <Navbar />
        <Main />
        <Button />
        <Footer />
      </ThemeContextProvider>
    </div>
  )
}

export default App