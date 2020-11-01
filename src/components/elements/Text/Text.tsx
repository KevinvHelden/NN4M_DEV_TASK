import React, { Fragment } from "react";
import styles from "./Text.module.scss";
import classnames from "classnames";

type Props = {
  text: string,
  variant?: any,
  link?: string,
  clickFunc?: () => void,
}

export default function Text(props: Props) {
  const { text, variant = "p", link, clickFunc } = props;
  let ComponentType = variant;

  return (
    <Fragment>
      {link ? (
        <a className={classnames(styles.link)} href={link}>
          <ComponentType
            className={classnames(styles.root, styles.link)}
            onClick={clickFunc}
          >
            {text}
          </ComponentType>
        </a>
      ) : (
          <ComponentType
            className={classnames(styles.root)}
            onClick={clickFunc}
          >
            {text}
          </ComponentType>
        )}
    </Fragment>
  );
}
