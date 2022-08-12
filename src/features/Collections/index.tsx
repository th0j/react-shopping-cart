import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'

import { IGetProductsResponse, IProduct } from '../../models/product'
import { getProducts } from '../../services/productApi'
import Filters from './components/Filters'

const Collections = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts().then((products: IProduct[]) => {
      setProducts(products)
    })
  }, [setProducts])

  return (
    <div className="container flex mt-10 gap-8">
      <div className="collection-filter w-72">
        <Filters />
      </div>
      <div className="collection-main grid grid-cols-4 gap-4">
        {products?.map((p, index) => (
          <ProductCard {...p} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Collections
