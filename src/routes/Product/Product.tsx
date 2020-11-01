import React, { useState, useEffect } from "react";
import styles from "./Product.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';
import { fetch } from '../../helpers';

export default function Product() {
    const [product, setProduct] = useState({
        prodid: "",
        name: "",
        cost: ""
    });

    useEffect(() => {
        fetch.product(getProductName(), setProduct);
    }, []);

    const getProductName = () => {
        // All of the url parameters
        const queryString = window.location.search;
        // Uses the url to search for the id parameter
        const productName = new URLSearchParams(queryString).get('name');
        // Returns the id from the url
        return productName;
    }

    return (
        <main className={classnames(styles.root)}>
            <div className={classnames(styles.bannerContainer)}>
                <img src={`http://riverisland.scene7.com/is/image/RiverIsland/${product.prodid}_main?$productImageLarge$`} alt={product.name} />
            </div>
            <div className={classnames(styles.description)}>
                <Text text={product.name} variant={"h1"} />
                <Text text={`£${product.cost}`} />
            </div>
        </main>
    )
}