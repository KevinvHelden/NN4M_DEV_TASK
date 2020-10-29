import React from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

type Props = {
  text: string,
  disabled?: boolean,
  link?: string,
  clickFunc?: () => void,
}

export default function Button(props: Props) {
  const { text, disabled } = props;

  return (
    <button disabled={disabled} className={classnames(styles.root)}>
      {text}
    </button>
  );
}
