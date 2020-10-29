import React, { useEffect, useRef, useState } from "react";
import styles from "./Searchbar.module.scss";
import classnames from "classnames";
import close from '../../../images/icons/x.svg';

export default function Searchbar() {
  const [activeIcon, toggleIcon] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  const imageEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (inputEl && inputEl.current) inputEl.current.addEventListener("input", handleChangeEvents);
    if (imageEl && imageEl.current) imageEl.current.addEventListener("click", deleteInputValue);
  });

  // Update value in state and check if delete icon should disappear
  const handleChangeEvents = () => {
    changeValue();
    checkDeleteIcon();
  }

  // Update input value on input change
  const changeValue = () => {
    if (inputEl && inputEl.current) {
      setInputValue(inputEl.current.value)
    }
  }

  // Check if the delete icon should disappear
  const checkDeleteIcon = () => {
    if (inputEl && inputEl.current && inputEl.current.value.length !== 0) {
      toggleIcon(true)
    } else {
      toggleIcon(false)
    }
  }

  // Delete icon on click event
  const deleteInputValue = () => {
    // Change input value to nothing
    if (inputEl && inputEl.current) {
      setInputValue('')
    };
    // Check if the delete icon should disappear
    checkDeleteIcon();
  }

  return (
    <div className={classnames(styles.root)}>
      <input ref={inputEl} value={inputValue} className={classnames(styles.input)} placeholder={"Search for clothing"} />
      <img ref={imageEl} className={classnames(styles.closeIcon, { [styles.active]: activeIcon })} src={close} alt={"close-icon"} />
    </div>
  );
}
