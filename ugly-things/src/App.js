import React from "react"
// import { AppContext, AppContextProvider } from "./components/themeContext"
import Create from './components/Create'
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="main">
      <Create />
      <Read />
      <Update />
    </div>
  );
}

export default App;