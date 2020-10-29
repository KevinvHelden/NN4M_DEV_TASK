import React, { Fragment } from "react";
import styles from "./Product.module.scss";
import classnames from "classnames";
import { Text } from '../';

type Props = {
  title: string,
  price: number,
  image: {
    source: string,
    alt: string,
  },
}

export default function Product(props: Props) {
  const { title, price, image } = props;
  const { source, alt } = image;

  return (
    <Fragment>
      <a href={`/product?item=${title}`}>
        <div className={classnames(styles.root)}>
          <div className={classnames(styles.imageContainer)}>
            <img src={source} alt={alt} />
          </div>
          <div className={classnames(styles.description)}>
            <Text text={title} />
            <Text text={`£${price.toString()}`} />
          </div>
        </div>
      </a>
    </Fragment >
  );
}
