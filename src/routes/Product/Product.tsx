import React, { useState, useEffect, useRef } from "react";
import styles from "./Product.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';
import { fetch } from '../../helpers';

export default function Product() {
    const bigImageRef = useRef<HTMLImageElement>(null);
    const [product, setProduct] = useState({
        prodid: "",
        name: "",
        cost: "",
        allImages: []
    });


    useEffect(() => {
        fetch.product(getProduct(), setProduct);
    }, []);

    const getProduct = () => {
        // All of the url parameters
        const queryString = window.location.search;
        // Uses the url to search for the id parameter
        const prodid = new URLSearchParams(queryString).get('prodid');
        // Returns the id from the url
        return prodid;
    }

    const formatAllImages = () => {
        const allImages = product.allImages;
        return allImages.map(image => {
            return <img onMouseOver={hoverAltImage} src={image} alt={product.name} />
        });
    }

    // Sets the big image source to the hovered image
    const hoverAltImage = (e: any) => {
        const bigImage = bigImageRef.current;
        const targetImage = e.target.src;
        if (bigImage) {
            bigImage.src = `${targetImage}?$productImageLarge$`;
        }
    }

    return (
        <main className={classnames(styles.root)}>
            <div className={classnames(styles.imagesContainer)}>
                <div className={classnames(styles.bannerContainer)}>
                    <img ref={bigImageRef} src={`http://riverisland.scene7.com/is/image/RiverIsland/${product.prodid}_main?$productImageLarge$`} alt={product.name} />
                </div>
                <div className={classnames(styles.altImagesContainer)}>
                    {formatAllImages()}
                </div>
            </div>
            <div className={classnames(styles.description)}>
                <Text text={product.name} variant={"h1"} />
                <Text text={`£${product.cost}`} />
            </div>
        </main>
    )
}