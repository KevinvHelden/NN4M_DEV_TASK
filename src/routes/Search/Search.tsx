import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';
import { ProductOverview } from '../../components/collections';
import { urlParam, fetch } from '../../helpers';

export default function Search() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch.filteredProducts(urlParam.getSingle("keyword"), setProducts);
    }, [])

    return (
        <main className={classnames(styles.root)}>
            <div className={classnames(styles.summary)}>
                <Text text={`Search results for: `} variant={"h1"} />
                <Text text={`"${urlParam.getSingle("keyword")}"`} variant={"h1"} />
                <Text text={`${products.length.toString()} products`} />
            </div>
            <ProductOverview products={products} />
        </main>
    )
}