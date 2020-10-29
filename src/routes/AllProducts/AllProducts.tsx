import React from "react";
import styles from "./AllProducts.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';
import { ProductOverview } from '../../components/collections';

export default function AllProducts() {

    const productList = [
        { title: "Jacket", price: 18.99, image: { source: "", alt: "" } },
        { title: "Pants", price: 23.99, image: { source: "", alt: "" } },
        { title: "Socks", price: 7.99, image: { source: "", alt: "" } }
      ];

    return (
        <main className={classnames(styles.root)}>
            <Text text={"All clothing"} variant={"h1"} />
            <ProductOverview products={productList} />
        </main>
    )
}