import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToCart = (product, quantity, tipo) => {
    const existingItem = cart.find(
      (item) => item.id === product.id && item.tipo === tipo
    )

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id && item.tipo === tipo
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity, tipo }])
    }
    
    updateTotal()
  }

  const removeFromCart = (productId, tipo) => {
    setCart(cart.filter(item => !(item.id === productId && item.tipo === tipo)))
    updateTotal()
  }

  const updateTotal = () => {
    const newTotal = cart.reduce((sum, item) => {
      const price = item.tipo === 'caja' ? item.precioCaja : item.precio
      return sum + (price * item.quantity)
    }, 0)
    setTotal(newTotal)
  }

  const clearCart = () => {
    setCart([])
    setTotal(0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      total,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
