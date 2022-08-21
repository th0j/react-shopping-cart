import { IProduct, IProductVariant } from '../../models/product'
import { useProductsContext } from './ProductProvider'

const useProducts = () => {
  const { products, setProducts, filters, setFilters } = useProductsContext()

  return { products, setProducts, filters, setFilters }
}

export default useProducts
