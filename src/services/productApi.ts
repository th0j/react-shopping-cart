import axios from 'axios'
import { IGetProductsResponse } from '../models/product'
import json from '../assets/products.json'

const getProducts = async () => {
  let response: IGetProductsResponse

  // response = await axios.get(
  //   'https://firebasestorage.googleapis.com/v0/b/shopping-cart-9422a.appspot.com/o/products.json?alt=media'
  // )

  response = json

  return response.products || []
}

export { getProducts }
