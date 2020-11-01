import React, { Fragment } from "react";
import styles from "./Product.module.scss";
import classnames from "classnames";
import { Text } from '../';
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    // Once the image has loaded, stop observing the image
    triggerOnce: true,
    // The product has to be above the fold for 10% for the image to load
    threshold: .1,
  });

  // Adds dashes to the product name for Url parameters
  const addDashesToProductName = (productName: string) => {
    const removedSpaces = productName.replace(/\s/g, "-");
    return removedSpaces;
  };

  return (
    <Fragment>
      <a href={`/product?name=${addDashesToProductName(title)}`}>
        <div className={classnames(styles.root)}>
          <div ref={ref} className={classnames(styles.imageContainer)}>
            {
              // If the image is in view load it otherwise return null
              inView ? (
                // Makes sure to show the product info before the image is loaded
                <img src={source ? source : ''} alt={alt} />
              ) :
                null
            }
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
