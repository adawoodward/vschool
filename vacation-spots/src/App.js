import React from "react"
import Navbar from "../src/components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})

  return (
    <div>
      <Navbar />
      <section>
        {cards}
      </section>
      <Footer />
    </div>
  )
}