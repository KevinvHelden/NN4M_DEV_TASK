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
    // Returns all products
    return products.map((product, index) => {
      return <Product
        key={index}
        title={product.name}
        price={product.cost}
        image={{
          source: product.prodid,
          alt: product.name
        }
        }
      />
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
