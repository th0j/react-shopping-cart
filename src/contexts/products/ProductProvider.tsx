import { createContext, useContext, useState } from 'react'
import { IProduct } from '../../models/product'

interface IProductContext {
  products: IProduct[]
  setProducts(products: IProduct[]): void
  filters: string[]
  setFilters(filters: string[]): void
}

const ProductContext = createContext<IProductContext | null>(null)

const useProductsContext = (): IProductContext => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}

const ProductProvider = (props: any) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [filters, setFilters] = useState<string[]>([])

  const productContextValue: IProductContext = {
    products,
    setProducts,
    filters,
    setFilters
  }

  return <ProductContext.Provider value={productContextValue} {...props} />
}

export { ProductProvider, useProductsContext }
