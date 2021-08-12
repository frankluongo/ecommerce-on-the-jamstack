import css from "#styles/components/Products.module.scss";

import products from "#data/products.json";
import { Product } from "./Product";

export const Products = () => {
  return (
    <ul className={css.Products}>
      {products.map(pd => <Product product={pd} key={pd.id} />)}
    </ul>
  )
}
