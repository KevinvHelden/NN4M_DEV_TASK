import React, { Fragment } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

type Props = {
  text: string,
  disabled?: boolean,
  link?: string,
  clickFunc?: () => void,
}

export default function Button(props: Props) {
  const { text, disabled, link } = props;

  return (
    <Fragment>
      {
        link
          ?
          (<a href={link}>
            <button disabled={disabled} className={classnames(styles.root)}>
              {text}
            </button >
          </a>)
          :
          (<button disabled={disabled} className={classnames(styles.root)}>
            {text}
          </button>)
      }
    </Fragment>

  );
}
