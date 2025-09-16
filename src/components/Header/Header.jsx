import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* NepSYS Logo */}
      <a href="/" className={styles.logo} aria-label="NepSYS Home" onClick={closeMenu}>
        <img
          src={require('./img/loo.png')}
          alt="NepSYS Logo"
          className={styles.logoImg}
          height={48}
        />
        <span className={styles.logoText}>NepSoS</span>
      </a>
      {/* Overlay for mobile nav */}
      {menuOpen && (
        <div
          className={`${styles.navOverlay} ${menuOpen ? styles.navOverlayOpen : ''}`}
          onClick={closeMenu}
        />
      )}
      {/* Navigation */}
      <nav className={styles.nav} aria-label="Main Navigation">
        <ul
          className={
            menuOpen
              ? `${styles.navList} ${styles.navListOpen}`
              : styles.navList
          }
        >
          {/* <li><a href="/" className={styles.navLink} onClick={closeMenu}>Home</a></li> */}
          <li><a href="/about" className={styles.navLink} onClick={closeMenu}>About</a></li>
          <li><a href="/services" className={styles.navLink} onClick={closeMenu}>Services</a></li>
          <li><a href="/portfolio" className={styles.navLink} onClick={closeMenu}>Portfolio</a></li>
          <li><a href="/training" className={styles.navLink} onClick={closeMenu}>Training</a></li>
          <li><a href="/blog" className={styles.navLink} onClick={closeMenu}>Blog</a></li>
 
          <li><a href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</a></li>
        </ul>
        {/* Hamburger for mobile */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
