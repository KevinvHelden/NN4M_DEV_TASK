import React from "react";
import styles from "./Search.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';

export default function Search() {
    return (

        <main className={classnames(styles.root)}>
            <div className={classnames(styles.greeting)}>
                <Text text={"Welcome to River Island"} variant={"h1"} />
                <Text text={"Open the menu to get started."} />
            </div>
        </main>
    )
}