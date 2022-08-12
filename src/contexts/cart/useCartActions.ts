import { ICartProduct } from '../../models/product'
import { useCartContext } from './CartProvider'

const useCartActions = () => {
  const { products, setProducts, setTotal } = useCartContext()

  const updateQuantity = (product: ICartProduct): ICartProduct[] => {
    return products.map((p) => (p.handle === product.handle ? { ...product, quantity: p.quantity + 1 } : p))
  }

  const addProduct = (newProduct: ICartProduct) => {
    let updatedProducts: ICartProduct[]

    const isProductExisted = products.some((product: ICartProduct) => newProduct.handle === product.handle)

    if (isProductExisted) updatedProducts = updateQuantity(newProduct)
    else updatedProducts = [...products, newProduct]

    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  }

  const updateCartTotal = (products: ICartProduct[]) => {
    const totalPrice = products.reduce((sum: number, p: ICartProduct) => {
      sum += p.variants[0].price * p.quantity
      return sum
    }, 0)

    setTotal(totalPrice)
  }

  return {
    products,
    addProduct
  }
}

export default useCartActions
