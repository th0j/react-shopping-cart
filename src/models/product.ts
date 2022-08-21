// https://shopify.dev/api/admin-rest/2021-10/resources/product#get-products
// https://shopify.dev/api/admin-rest/2022-07/resources/product-variant

export interface IImage {
  src: string
}

export interface IProductVariant {
  compare_at_price: number
  price: number
  option1: string | null
  option2: string | null
  option3: string | null
  inventory_quantity: number
}

export interface IOption {
  name: string
  position: number
  values: String[]
}

export interface IProduct {
  title: string
  body_html: string
  vendor: string
  handle: string
  variants: IProductVariant[]
  options: IOption[]
  images: IImage[]
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface IGetProductsResponse {
  products: IProduct[]
}
