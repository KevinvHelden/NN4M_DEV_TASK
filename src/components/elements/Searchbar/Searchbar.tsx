import React, { useEffect, useRef, useState } from "react";
import styles from "./Searchbar.module.scss";
import classnames from "classnames";
import close from '../../../images/icons/x.svg';

type Props = {
  // A reference to the searchbar to get its value
  reference: any,
  // Additional onChange functions from parent
  onchangeFunc?: () => void,
}

export default function Searchbar(props: Props) {
  const [activeIcon, toggleIcon] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const imageEl = useRef<HTMLImageElement>(null);
  const { reference } = props;

  useEffect(() => {
    if (imageEl && imageEl.current) imageEl.current.addEventListener("click", deleteInputValue);
  });

  // Update value in state and check if delete icon should disappear
  const handleChangeEvents = () => {
    const { onchangeFunc } = props;
    changeValue();
    checkDeleteIcon();
    onchangeFunc && onchangeFunc();
  }

  // Update input value on input change
  const changeValue = () => {
    const { reference } = props;
    if (reference && reference.current) {
      setInputValue(reference.current.value)
    }
  }

  // Check if the delete icon should disappear
  const checkDeleteIcon = () => {
    const { reference } = props;
    if (reference && reference.current && reference.current.value.length !== 0) {
      toggleIcon(true)
    } else {
      toggleIcon(false)
    }
  }

  // Delete icon on click event
  const deleteInputValue = () => {
    const { onchangeFunc } = props;
    const { reference } = props;
    // Change input value to nothing
    if (reference && reference.current) {
      setInputValue('')
    };
    // Check if the delete icon should disappear
    checkDeleteIcon();
    onchangeFunc && onchangeFunc();
  }

  return (
    <div className={classnames(styles.root)}>
      <input onChange={handleChangeEvents} ref={reference} value={inputValue} className={classnames(styles.input)} placeholder={"Search for clothing"} />
      <img ref={imageEl} className={classnames(styles.closeIcon, { [styles.active]: activeIcon })} src={close} alt={"close-icon"} />
    </div>
  );
}
