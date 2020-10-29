import React from "react";
import styles from "./ProductOverview.module.scss";
import classnames from "classnames";
import { Product } from '../../elements';

type Props = {
  products: Array<any>,
}

export default function ProductOverview(props: Props) {
  const { products } = props;

  const formatProducts = () => {
    return products.map((product) => {
      return <Product title={product.title} price={product.price} image={product.image} />
    })
  }

  return (
    <div className={classnames(styles.root)}>
      {
        formatProducts()
      }
    </div >
  );
}
