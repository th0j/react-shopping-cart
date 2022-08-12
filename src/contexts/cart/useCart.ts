import { useCartContext } from './CartProvider'
import useCartActions from './useCartActions'

const useCart = () => {
  const { isOpen, setIsOpen, total } = useCartContext()
  const { products, addProduct } = useCartActions()

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return {
    isOpen,
    openCart,
    closeCart,
    products,
    addProduct,
    total
  }
}
export default useCart
