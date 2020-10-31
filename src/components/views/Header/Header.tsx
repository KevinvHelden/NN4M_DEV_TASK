import React, { Fragment, useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import { Button, Searchbar, Text } from '../../elements';
import logo from '../../../images/logo.svg';
import hamburger from '../../../images/icons/hamburger.svg';
import search from '../../../images/icons/search.svg';
import arrowRight from '../../../images/icons/arrow-right.svg';
import arrowLeft from '../../../images/icons/arrow-left.svg';

export default function Header() {
  const [activeMenu, openMenu] = useState(false);
  const [activeSearch, openSearch] = useState(false);
  const [searchQuery, editQuery] = useState('');
  const [buttonDisabled, toggleDisabledButton] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkIfButtonIsDisabled();
  });

  const checkIfButtonIsDisabled = () => {
    const searchbar = inputEl;
    if (searchbar && searchbar.current) {
      if (searchbar.current.value.length !== 0) {
        toggleDisabledButton(false);
        editQuery(searchbar.current.value);
      } else {
        toggleDisabledButton(true)
      }
    }
  }

  return (
    <Fragment>
      {/* Header main body */}
      <header className={classnames(styles.root)}>
        <a href={'/'}>
          <img className={classnames(styles.logo)} src={logo} alt={"logo"} />
        </a>
        <div className={classnames(styles.actions)}>
          <img onClick={() => openSearch(!activeSearch)} className={classnames(styles.search)} src={search} alt={"search"} />
          <img onClick={() => openMenu(true)} className={classnames(styles.hamburger)} src={hamburger} alt={"hamburger"} />
        </div>
      </header>

      <div className={classnames(styles.shade, { [styles.active]: activeMenu })} />

      {/* Main menu */}
      <div className={classnames(styles.menuContainer, { [styles.active]: activeMenu })}>
        <div className={classnames(styles.menuContainerContent)}>
          <div className={classnames(styles.header)}>
            <div onClick={() => openMenu(false)} className={classnames(styles.backButton)}>
              <Text text={"Back"} />
              <img src={arrowRight} alt={"arrow-right"} />
            </div>
          </div>
          <div className={classnames(styles.content)}>
            <Text text={"Categories"} variant={"h1"} />
            <Text text={"All clothing"} link={'/all-products'} />
          </div>
        </div>
      </div>

      {/* Search menu */}
      <div className={classnames(styles.searchContainer, { [styles.active]: activeSearch })}>
        <div className={classnames(styles.header)}>
          <div onClick={() => openSearch(false)} className={classnames(styles.backButton)}>
            <img src={arrowLeft} alt={"arrow-right"} />
            <Text text={"Back"} />
          </div>
        </div>
        <div className={classnames(styles.content)}>
          <Text text={"Search River Island"} variant={"h1"} />
          <Searchbar reference={inputEl} onchangeFunc={checkIfButtonIsDisabled} />
          <Button disabled={buttonDisabled} text={"Search"} link={"/search?keyword=" + searchQuery} />
        </div>
      </div>
    </Fragment>
  );
}
