import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    {/* NepSYS Logo */}
    <a href="/" className={styles.logo} aria-label="NepSYS Home">
      <img
        src={require('./img/loo.png')}
        alt="NepSYS Logo"
        className={styles.logoImg}
        height={48}
      />
      <span className={styles.logoText}>NepSYS</span>
    </a>
    {/* Navigation */}
    <nav className={styles.nav} aria-label="Main Navigation">
      <ul className={styles.navList}>
        <li><a href="/" className={styles.navLink}>Home</a></li>
        <li><a href="/services" className={styles.navLink}>Services</a></li>
        <li><a href="/portfolio" className={styles.navLink}>Portfolio</a></li>
        <li><a href="/training" className={styles.navLink}>Training</a></li>
        <li><a href="/blog" className={styles.navLink}>Blog</a></li>
        <li><a href="/about" className={styles.navLink}>About</a></li>
        <li><a href="/contact" className={styles.navLink}>Contact</a></li>
      </ul>
      {/* Hamburger for mobile */}
      <button className={styles.hamburger} aria-label="Open menu">
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  </header>
);

export default Header;
