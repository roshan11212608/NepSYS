import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import logo from '../../components/Header/img/nepsys-logo.jpg';
import styles from './Home.module.css';

const Home = () => (
  <>
    <Header/>
    <main className={styles.heroMain}>
      <section className={styles.heroSection}>
        <img src={logo} alt="NepSYoS Logo" className={styles.logo} />
        <h1 className={styles.heroTitle}>Empowering Nepal with <br />Digital Excellence</h1>
        <p className={styles.heroSubtitle}>
          From school management systems to e-commerce platforms, we deliver cutting-edge software solutions that transform businesses across Nepal and beyond.
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
      {/* Why Choose NepSYS Section */}
      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>Why Choose NepSYS?</h2>
        <p className={styles.whySubtitle}>We combine local expertise with global standards to deliver exceptional results.</p>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><svg width="38" height="38" fill="none"><rect width="38" height="38" rx="10" fill="#f2dede"/><text x="19" y="25" textAnchor="middle" fontSize="22" fill="#b71c1c">{'</>'}</text></svg></div>
            <div className={styles.whyCardTitle}>Expert Development</div>
            <div className={styles.whyCardDesc}>Our team of experienced developers uses the latest technologies and best practices.</div>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><svg width="38" height="38" fill="none"><rect width="38" height="38" rx="10" fill="#f2dede"/><text x="19" y="25" textAnchor="middle" fontSize="22" fill="#b71c1c">👤</text></svg></div>
            <div className={styles.whyCardTitle}>Client-Focused Approach</div>
            <div className={styles.whyCardDesc}>We work closely with you throughout the project to ensure your vision becomes reality.</div>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><svg width="38" height="38" fill="none"><rect width="38" height="38" rx="10" fill="#f2dede"/><text x="19" y="25" textAnchor="middle" fontSize="22" fill="#b71c1c">🏅</text></svg></div>
            <div className={styles.whyCardTitle}>Proven Track Record</div>
            <div className={styles.whyCardDesc}>Over 150 successful projects delivered across various industries in Nepal.</div>
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
              "NepSYS transformed our school management completely. The ERP system is intuitive and has improved our efficiency tremendously."
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
              "The travel booking platform developed by NepSYS has increased our online bookings by 200%. Excellent work!"
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
      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaSectionTitle}>Ready to Transform Your Business?</h2>
        <p className={styles.ctaSectionSubtitle}>
          Let's discuss your project and explore how we can help you achieve your goals with our expertise.
        </p>
        <div className={styles.ctaSectionButtons}>
          <a href="/contact" className={styles.ctaSectionBtnPrimary}>Get Started Today</a>
          <a href="/training" className={styles.ctaSectionBtnOutline}>Explore Training</a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
