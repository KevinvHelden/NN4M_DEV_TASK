import React from "react";
import styles from "./Product.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';

export default function Product() {
    return (
        <main className={classnames(styles.root)}>
            <div className={classnames(styles.bannerContainer)}>
                <img src={""} alt={""} />
            </div>
            <div className={classnames(styles.description)}>
                <Text text={"Product title"} variant={"h1"} />
                <Text text={"Product price"} />
            </div>
        </main>
    )
}