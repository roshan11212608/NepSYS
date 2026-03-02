import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.col}>
        <a href="/" className={styles.logo} aria-label="NEXA Home">
          <img
            src={require("./img/loo.png")}
            alt="NEXA Logo"
            className={styles.logoImg}
            height={48}
          />
          <span className={styles.logoText}>NEXA_Nepal</span>
        </a>
        <p className={styles.desc}>
          Empowering businesses across Nepal with cutting-edge software
          solutions.
          <br />
          From school management to e-commerce platforms, we deliver excellence.
        </p>
        <div className={styles.socials}>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="9" fill="#b71c1c" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="9" fill="#b71c1c" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="9" fill="#b71c1c" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="20" width="20">
              <circle cx="10" cy="10" r="9" fill="#b71c1c" />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.heading}>Our Services</div>
        <ul className={styles.links}>
          <li>School ERP Systems</li>
          <li>Travel Booking Platforms</li>
          <li>
            <b>E-commerce Solutions and Swari Sewa</b>
          </li>
          <li>Industrial Training</li>
          <li>Custom Software Development</li>
        </ul>
      </div>
      <div className={styles.col}>
        <div className={styles.heading}>Quick Links</div>
        <ul className={styles.links}>
          <li>About Us</li>
          <li>Training Programs</li>
          <li>Client Portal</li>
          <li>Contact Us</li>
          <li>Admin Panel</li>
        </ul>
      </div>
      <div className={styles.col}>
        <div className={styles.heading}>Contact Us</div>
        <ul className={styles.contact}>
          <li>
            <span role="img" aria-label="Location">
              📍
            </span>{" "}
            Kathmandu, Nepal
          </li>
          <li>
            <span role="img" aria-label="Phone">
              📞
            </span>{" "}
            +977-1-4123456
          </li>
          <li>
            <span role="img" aria-label="Email">
              ✉️
            </span>{" "}
            info@nexa.com
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.bottom}>
      &copy; {new Date().getFullYear()} NEXA. All rights reserved. Built with
      excellence in Nepal.
    </div>
  </footer>
);

export default Footer;
