import { createContext, useContext, useState } from 'react'
import { ICartProduct } from '../../models/product'

interface ICartContext {
  isOpen: boolean
  setIsOpen(state: boolean): void
  products: ICartProduct[]
  setProducts(products: ICartProduct[]): void
  total: number
  setTotal(state: number): void
}

const CartContext = createContext<ICartContext | null>(null)

const useCartContext = (): ICartContext => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return context
}

const CartProvider = (props: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState<ICartProduct[]>([])
  const [total, setTotal] = useState(0)

  const cartContextValue: ICartContext = {
    isOpen,
    setIsOpen,
    products,
    setProducts,
    total,
    setTotal
  }

  return <CartContext.Provider value={cartContextValue} {...props} />
}

export { CartProvider, useCartContext }
