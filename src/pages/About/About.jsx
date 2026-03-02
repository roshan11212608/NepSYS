import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <div className={styles.aboutContainer}>
          
          {/* Hero Section */}
          <section className={styles.aboutHero}>
            <h1 className={styles.aboutTitle}>About NEXA</h1>
            <p className={styles.aboutSubtitle}>
              We are a leading digital engineering company dedicated to transforming businesses through innovative technology solutions.
            </p>
            <div className={styles.visionStatement}>
              We build technology that grows with your business.
            </div>
          </section>

          {/* Company Introduction */}
          <section className={styles.companyIntro}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <div className={styles.introContent}>
              <div className={styles.introText}>
                <p>
                  NEXA is a premier digital engineering company founded on principles of innovation, security, and scalability. 
                  We specialize in creating cutting-edge software solutions that empower businesses to thrive in the digital age.
                </p>
                <p>
                  Our team of expert developers, designers, and consultants work collaboratively to deliver solutions that not only 
                  meet your current needs but also anticipate future challenges. We believe in building long-term partnerships 
                  with our clients, ensuring their success is our success.
                </p>
                <p>
                  Since our inception, we have helped numerous businesses across various industries transform their operations, 
                  improve efficiency, and achieve their digital transformation goals. Our commitment to excellence and innovation 
                  has made us a trusted partner for companies seeking to leverage technology for competitive advantage.
                </p>
              </div>
              <div className={styles.introVisual}>
                <div className={styles.statsCard}>
                  <div className={styles.statsNumber}>150+</div>
                  <div className={styles.statsLabel}>Projects Delivered</div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className={styles.coreValues}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Innovation</h3>
                <p className={styles.valueDescription}>
                  We constantly push the boundaries of technology to create innovative solutions that solve real business problems.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#00C2FF" strokeWidth="2"/>
                    <path d="M12 22V12" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Security</h3>
                <p className={styles.valueDescription}>
                  Security is at the core of everything we build. We implement enterprise-grade security measures.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12H22M12 2V22" stroke="#00C2FF" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Scalability</h3>
                <p className={styles.valueDescription}>
                  We design solutions that grow with your business and handle increased demand seamlessly.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="#00C2FF" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Reliability</h3>
                <p className={styles.valueDescription}>
                  We deliver on our promises with consistent quality, timely delivery, and reliable support.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className={styles.teamSection}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👨‍💻</div>
                <h3 className={styles.memberName}>Rajesh Kumar</h3>
                <p className={styles.memberRole}>Chief Technology Officer</p>
                <p className={styles.memberBio}>
                  Leading our technical vision with 15+ years of experience in enterprise software development.
                </p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👩‍💼</div>
                <h3 className={styles.memberName}>Sunita Sharma</h3>
                <p className={styles.memberRole}>Head of Operations</p>
                <p className={styles.memberBio}>
                  Ensuring smooth project delivery and client satisfaction with expertise in agile methodologies.
                </p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👨‍🔬</div>
                <h3 className={styles.memberName}>Amit Gurung</h3>
                <p className={styles.memberRole}>Lead Solutions Architect</p>
                <p className={styles.memberBio}>
                  Designing scalable and secure systems that drive business growth and digital transformation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaSubtitle}>
              Let's discuss how NEXA can help you achieve your digital transformation goals with our innovative solutions.
            </p>
            <button className={styles.ctaButton}>Get Started Today</button>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
