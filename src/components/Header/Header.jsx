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
        <span className={styles.logoText}>NepSYS</span>
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
          <li><a href="/about" className={styles.navLink} onClick={closeMenu}>
            <span style={{display:'inline-flex',alignItems:'center',marginRight:'7px'}}>
              <svg width="19" height="19" fill="#b71c1c" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><rect x="6" y="15" width="12" height="6" rx="3"/></svg>
            </span>
            About
          </a></li>
          <li><a href="/services" className={styles.navLink} onClick={closeMenu}>
            <span style={{display:'inline-flex',alignItems:'center',marginRight:'7px'}}>
              <svg width="19" height="19" fill="#b71c1c" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="2" rx="1"/><rect x="3" y="5" width="18" height="2" rx="1"/><rect x="3" y="17" width="18" height="2" rx="1"/></svg>
            </span>
            Services
          </a></li>
          <li><a href="/portfolio" className={styles.navLink} onClick={closeMenu}>
            <span style={{display:'inline-flex',alignItems:'center',marginRight:'7px'}}>
              <svg width="19" height="19" fill="#b71c1c" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="3"/><rect x="7" y="2" width="10" height="5" rx="2"/></svg>
            </span>
            Portfolio
          </a></li>
          <li><a href="/training" className={styles.navLink} onClick={closeMenu}>
            <span style={{display:'inline-flex',alignItems:'center',marginRight:'7px'}}>
              <svg width="19" height="19" fill="#b71c1c" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6zm0 13c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z"/></svg>
            </span>
            Training
          </a></li>
          <li><a href="/blog" className={styles.navLink} onClick={closeMenu}>
            <span style={{display:'inline-flex',alignItems:'center',marginRight:'7px'}}>
              <svg width="19" height="19" fill="#b71c1c" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#fff" strokeWidth="1.5"/></svg>
            </span>
            Blog
          </a></li>
          <li><a href="/contact" className={styles.navLink} onClick={closeMenu}>
            <span style={{display:'inline-flex',alignItems:'center',marginRight:'7px'}}>
              <svg width="19" height="19" fill="#b71c1c" viewBox="0 0 24 24"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zm3.5 3.5h13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"/></svg>
            </span>
            Contact
          </a></li>
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
