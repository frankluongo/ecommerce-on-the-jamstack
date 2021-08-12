import Image from 'next/image'

import css from "#styles/components/Product.module.scss"
import { Button } from './Button'

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
      <Button
        extraClasses="snipcart-add-item"
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-url={`/`}
        data-item-description={product.title}
        data-item-image={product.image}
        data-item-name={product.title}
      >
        Add To Cart
      </Button>
    </p>
  </li>
  )
}
