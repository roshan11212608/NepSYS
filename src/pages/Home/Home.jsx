import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import logo from '../../components/Header/img/loo.png';
import styles from './Home.module.css';

const Home = () => (
  <>
    <Header />
    <main className={styles.heroMain}>
      <section className={styles.heroSection}>
        {/* <img src={logo} alt="NepSYoS Logo" className={styles.logo} /> */}
        <h1 className={styles.heroTitle}>Smartt Digital Engineering</h1>
        <p className={styles.heroSubtitle}>
          Nexa delivers scalable, secure, and intelligent digital solutions designed for modern businesses. From software development to cloud solutions, we transform your digital infrastructure.
        </p>
        <div className={styles.heroButtons}>
          <a href="/services" className={styles.cta}>Explore Our Services</a>
          <a href="/contact" className={styles.ctaOutline}>Start Your Project</a>
        </div>

      </section>
      <section className={styles.statsSection}>
        <div className={styles.stat}><span>150+</span><br />Projects Delivered</div>
        <div className={styles.stat}><span>80+</span><br />Clients Served</div>
        <div className={styles.stat}><span>5+</span><br />Years Experience</div>
        <div className={styles.stat}><span>24/7</span><br />Support</div>
      </section>

      {/* Why Choose NEXA Section */}
      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>Why Choose NEXA?</h2>
        <p className={styles.whySubtitle}>We combine cutting-edge technology with proven expertise to deliver exceptional digital solutions.</p>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><svg width="38" height="38" fill="none"><rect width="38" height="38" rx="10" fill="#f2dede" /><text x="19" y="25" textAnchor="middle" fontSize="22" fill="#b71c1c">{'</>'}</text></svg></div>
            <div className={styles.whyCardTitle}>Software Development</div>
            <div className={styles.whyCardDesc}>Custom applications built with modern frameworks and scalable architecture.</div>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><svg width="38" height="38" fill="none"><rect width="38" height="38" rx="10" fill="#f2dede" /><text x="19" y="25" textAnchor="middle" fontSize="22" fill="#b71c1c">👤</text></svg></div>
            <div className={styles.whyCardTitle}>Cloud Solutions</div>
            <div className={styles.whyCardDesc}>Secure, scalable cloud infrastructure and migration services.</div>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><svg width="38" height="38" fill="none"><rect width="38" height="38" rx="10" fill="#f2dede" /><text x="19" y="25" textAnchor="middle" fontSize="22" fill="#b71c1c">🏅</text></svg></div>
            <div className={styles.whyCardTitle}>Automation & IT Consulting</div>
            <div className={styles.whyCardDesc}>Streamlined workflows and strategic technology consulting for business growth.</div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className={styles.testimonialSection}>
        <h2 className={styles.testimonialTitle}>What Our Clients Say</h2>
        <p className={styles.testimonialSubtitle}>Don't just take our word for it - here's what our clients have to say about working with us.</p>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialText}>
              "NEXA transformed our school management completely. The ERP system is intuitive and has improved our efficiency tremendously."
            </div>
            <div className={styles.testimonialAuthorRow}>
              <span className={styles.testimonialAvatar}>🧑‍🏫</span>
              <div>
                <span className={styles.testimonialAuthor}>Rajesh Shrestha</span><br />
                <span className={styles.testimonialRole}>Principal, Kathmandu Valley School</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialText}>
              "The travel booking platform developed by NEXA has increased our online bookings by 200%. Excellent work!"
            </div>
            <div className={styles.testimonialAuthorRow}>
              <span className={styles.testimonialAvatar}>👩‍💼</span>
              <div>
                <span className={styles.testimonialAuthor}>Sunita Maharjan</span><br />
                <span className={styles.testimonialRole}>CEO, Mountain Travel Nepal</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialText}>
              "Our e-commerce platform is running smoothly and sales have doubled since launch. Great technical support too!"
            </div>
            <div className={styles.testimonialAuthorRow}>
              <span className={styles.testimonialAvatar}>👨‍💻</span>
              <div>
                <span className={styles.testimonialAuthor}>Amit Gurung</span><br />
                <span className={styles.testimonialRole}>Founder, Himalayan Crafts Store</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Members Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Meet Our Team</h2>
        <p className={styles.teamSubtitle}>The people behind NEXA's success</p>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/men/1.jpg" alt="Roshan Karki" />
            <div className={styles.teamName}>Roshan Karki</div>
            <div className={styles.teamRole}>Founder & CEO</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/men/2.jpg" alt="Suman Shrestha" />
            <div className={styles.teamName}>Suman Shrestha</div>
            <div className={styles.teamRole}>CTO</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/women/3.jpg" alt="Anita Gurung" />
            <div className={styles.teamName}>Anita Gurung</div>
            <div className={styles.teamRole}>Lead UI/UX Designer</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/men/4.jpg" alt="Dipesh Maharjan" />
            <div className={styles.teamName}>Dipesh Maharjan</div>
            <div className={styles.teamRole}>Senior Developer</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/women/5.jpg" alt="Rita Lama" />
            <div className={styles.teamName}>Rita Lama</div>
            <div className={styles.teamRole}>Project Manager</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/men/6.jpg" alt="Prakash Thapa" />
            <div className={styles.teamName}>Prakash Thapa</div>
            <div className={styles.teamRole}>QA Lead</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/women/7.jpg" alt="Mina Rai" />
            <div className={styles.teamName}>Mina Rai</div>
            <div className={styles.teamRole}>Business Analyst</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
          <div className={styles.teamCard}>
            <img className={styles.teamAvatar} src="https://randomuser.me/api/portraits/men/8.jpg" alt="Kiran Shrestha" />
            <div className={styles.teamName}>Kiran Shrestha</div>
            <div className={styles.teamRole}>DevOps Engineer</div>
            <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.7rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" fill="#4267B2" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" /></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" fill="#0077B5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.37-1.848 3.602 0 4.268 2.368 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" /></svg></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.633A9.936 9.936 0 0 0 24 4.557z" /></svg></a>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaSectionTitle}>Ready to Transform Your Business?</h2>
        <p className={styles.ctaSectionSubtitle}>
          Let's discuss your project and explore how we can help you achieve your goals with our expertise.
        </p>
        <div className={styles.ctaSectionButtons}>
          <a href="/contact" className={styles.ctaSectionBtnPrimary}>Get Started Today</a>
          <a href="/training" className={styles.ctaSectionBtnOutline}>Explore Training</a>
        </div>
      </section> */}
    </main>
    <Footer />
  </>
);

export default Home;
