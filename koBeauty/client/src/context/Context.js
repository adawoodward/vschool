import { createContext } from 'react'

const Cart = createContext()

const Context = ({ children }) => {
    // const products = 

  return <Cart.Provider>{children}</Cart.Provider>
}

export default Context