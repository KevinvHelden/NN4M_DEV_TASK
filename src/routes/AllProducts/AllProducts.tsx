import React from "react";
import styles from "./AllProducts.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';

export default function AllProducts() {
    return (
        <main className={classnames(styles.root)}>
            <Text text={"All clothing"} variant={"h1"} />
        </main>
    )
}