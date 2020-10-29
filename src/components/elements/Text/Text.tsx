import React, { Fragment } from "react";
import styles from "./Text.module.scss";
import classnames from "classnames";

type Props = {
  text: string,
  variant?: any,
  link?: string,
  strong?: boolean,
  clickFunc?: () => void,
}

export default function Text(props: Props) {
  const { text, variant = "p", strong = false, link, clickFunc } = props;
  let ComponentType = variant;

  return (
    <Fragment>
      {link ? (
        <a className={classnames(styles.link)} href={link}>
          <ComponentType
            className={classnames(
              styles.root, styles.link,
              { [styles.strong]: strong },
            )}
            onClick={clickFunc}
          >
            {text}
          </ComponentType>
        </a>
      ) : (
          <ComponentType
            className={classnames(
              styles.root,
              { [styles.strong]: strong },
            )}
            onClick={clickFunc}
          >
            {text}
          </ComponentType>
        )}
    </Fragment>
  );
}
