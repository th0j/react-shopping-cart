import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Button } from 'flowbite-react'

import { IProduct } from '../../models/product'

const ProductCard = (props: IProduct) => {
  return (
    <div className="card-wrapper">
      <div className="media media--3-4">
        <img src={props.images[0]?.src} alt="" />
      </div>

      <div className="card-information py-4 text-center">
        <a href="" className="font-medium">
          {props.title}
        </a>
        <div className="price">
          <span className="compare-at-price mr-4 text-gray-500">
            <s>${props.variants[0]?.compare_at_price}</s>
          </span>
          <span>${props.variants[0]?.price}</span>
        </div>
        <div className="py-2 flex justify-center">
          <Button gradientDuoTone="purpleToBlue" size={'lg'}>
            <ShoppingCartIcon className="mr-2 h-5 w-5" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
