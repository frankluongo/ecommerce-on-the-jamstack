import Image from 'next/image'

import css from "#styles/components/Product.module.scss"

interface ProductInterface {
  id: string,
  title: string,
  price: number,
  image: string
}

export const Product = ({ product }: { product: ProductInterface }) => {
  return (
    <li>
      <figure className={css.Image}>
        <Image src={product.image} alt={product.title} width="864" height="1200" layout="responsive" />
      </figure>
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <p>
      <button>Add To Cart</button>
    </p>
  </li>
  )
}
