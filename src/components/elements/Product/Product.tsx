import React, { Fragment, useEffect, useRef } from "react";
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
  const imageEl = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   const lazyLoadingOptions = {
  //     root: document.getElementById('root'),
  //     rootMargin: '0px',
  //     threshold: 1.0
  //   };
  //   const target = imageEl.current;
  //   const lazyImageObserver = new IntersectionObserver((entries, observer) => {
  //     observer.observe(target);

  //   }, lazyLoadingOptions);
  // }, [])

  const addDashesToProductName = (productName: string) => {
    const removedSpaces = productName.replace(/\s/g, "-");
    return removedSpaces;
  };

  return (
    <Fragment>
      <a href={`/product?name=${addDashesToProductName(title)}`}>
        <div className={classnames(styles.root)}>
          <div className={classnames(styles.imageContainer)}>
            <img ref={imageEl} src={source} alt={alt} />
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
