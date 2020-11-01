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
  
  return (
    <Fragment>
      <a href={`/product?prodid=${source}`}>
        <div className={classnames(styles.root)}>
          <div ref={ref} className={classnames(styles.imageContainer)}>
            {
              // If the image is in view load it otherwise return null
              inView ? (
                // Makes sure to show the product info before the image is loaded
                <img src={source ? `http://riverisland.scene7.com/is/image/RiverIsland/${source}_main` : ''} alt={alt} />
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
