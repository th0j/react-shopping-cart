// https://shopify.dev/api/admin-rest/2021-10/resources/product#get-products
// https://shopify.dev/api/admin-rest/2022-07/resources/product-variant

export interface IImage {
  src: string
}

export interface IProductVariant {
  compare_at_price: number
  price: number
}

export interface IProduct {
  title: string
  body_html: string
  vendor: string
  handle: string
  variants: IProductVariant[]
  images: IImage[]
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface IGetProductsResponse {
  products: IProduct[]
}
