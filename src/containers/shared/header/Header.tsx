
import React from "react";
import styles from "./Header.module.scss";
import logo from '../../../assets/images/logo.png'
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <nav className={styles.nav}>
        
          <a className={styles.testo} href="#">Blog</a>
          <a className={styles.testo} href="#">WhitePaper</a>
          <a className={styles.testo} href="#">Team</a>
          <a className={styles.testo} href="#">NTFs</a>
          <a className={styles.testo} href="#">SupportUS</a>
        
      </nav>
    </header>
  );
}

export default Header;
