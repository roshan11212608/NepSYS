import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* NEXA Logo */}
        <a href="/" className={styles.logo} aria-label="NEXA Home" onClick={closeMenu}>
          <img
            src={require('./img/loo.png')}
            alt="NEXA Logo"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>NEXA</span>
        </a>

        {/* Navigation */}
        <nav className={styles.nav} aria-label="Main Navigation">
          {/* Overlay for mobile nav */}
          {menuOpen && (
            <div
              className={`${styles.navOverlay} ${menuOpen ? styles.navOverlayOpen : ''}`}
              onClick={closeMenu}
            />
          )}
          
          <ul
            className={
              menuOpen
                ? `${styles.navList} ${styles.navListOpen}`
                : styles.navList
            }
          >
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink} onClick={closeMenu}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="/services" className={styles.navLink} onClick={closeMenu}>Services</a>
            </li>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink} onClick={closeMenu}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="/process" className={styles.navLink} onClick={closeMenu}>Process</a>
            </li>
            <li className={styles.navItem}>
              <a href="/tech" className={styles.navLink} onClick={closeMenu}>Tech Stack</a>
            </li>
            <li className={styles.navItem}>
              <a href="/#testimonials" className={styles.navLink} onClick={closeMenu}>Testimonials</a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
            </li>
            <li className={styles.navItem}>
              <button className={styles.ctaButton} onClick={() => window.location.href='/contact'}>Start Your Project</button>
            </li>
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
      </div>
    </header>
  );
};

export default Header;
