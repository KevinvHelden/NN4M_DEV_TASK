import React, { useState, useEffect } from "react";
import styles from "./AllProducts.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';
import { ProductOverview } from '../../components/collections';
import { fetch } from '../../helpers';

export default function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch.products(setProducts);
    }, []);

    return (
        <main className={classnames(styles.root)}>
            <Text text={"All clothing"} variant={"h1"} />
            <ProductOverview products={products} />
        </main>
    )
}