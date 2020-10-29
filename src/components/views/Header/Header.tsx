import React from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import logo from '../../../images/logo.svg';
import hamburger from '../../../images/icons/hamburger.svg';
import search from '../../../images/icons/search.svg';

function Header() {
  return (
    <header className={classnames(styles.root)}>
      <a href={'/'}>
        <img className={classnames(styles.logo)} src={logo} alt={"logo"} />
      </a>
      <div className={classnames(styles.actions)}>
        <img className={classnames(styles.search)} src={search} alt={"search"} />
        <img className={classnames(styles.hamburger)} src={hamburger} alt={"hamburger"} />
      </div>
    </header>
  );
}


export default Header;
