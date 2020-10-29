import React from "react";
import styles from "./Search.module.scss";
import classnames from "classnames";
import { Text } from '../../components/elements';

export default function Search() {

    const getKeyword = () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const keyword = urlParams.get('keyword');
        return keyword;
    }

    return (
        <main className={classnames(styles.root)}>
            <div className={classnames(styles.summary)}>
                <Text text={`Search results for: `} variant={"h1"} />
                <Text text={`"${getKeyword()}"`} variant={"h1"} />
                <Text text={"215 products"} />
            </div>
        </main>
    )
}