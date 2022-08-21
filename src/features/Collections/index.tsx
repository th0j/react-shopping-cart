import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { useProducts } from '../../contexts/products'

import { IGetProductsResponse, IProduct, IProductVariant } from '../../models/product'
import { getProducts } from '../../services/productApi'
import Filters from './components/Filters'

const Collections = () => {
  const { products, setProducts, filters } = useProducts()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      let productsFiltered = [...data]

      if (filters.length > 0)
        productsFiltered = data.filter((p: IProduct) =>
          p.variants.some((v: IProductVariant) => (v.option1 ? filters.includes(v.option1) : false))
        )
      setProducts(productsFiltered)
    }

    fetchData()
  }, [filters.length])

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
