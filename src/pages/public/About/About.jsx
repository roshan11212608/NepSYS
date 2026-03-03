import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <>
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
            <div className={styles.introGrid}>
              <div className={styles.introCard}>
                <div className={styles.cardIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Innovation Driven</h3>
                <p className={styles.cardDescription}>
                  <strong>NEXA</strong> is a digital engineering company that transforms businesses through innovative technology solutions. We combine creativity with technical excellence to deliver exceptional digital experiences.
                </p>
              </div>

              <div className={styles.introCard}>
                <div className={styles.cardIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#00C2FF" strokeWidth="2"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Expert Team</h3>
                <p className={styles.cardDescription}>
                  Our expert team works collaboratively to build solutions that meet your needs and anticipate future challenges. We're passionate about pushing the boundaries of what's possible in digital innovation.
                </p>
              </div>

              <div className={styles.introCard}>
                <div className={styles.cardIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1212 8.53447 21.3726C6.51168 20.6239 4.78465 19.2402 3.61096 17.4299C2.43727 15.6196 1.87979 13.4818 2.02168 11.3313C2.16356 9.18079 2.99721 7.13129 4.39828 5.49104C5.79935 3.85079 7.69279 2.70744 9.79619 2.23182C11.8996 1.7562 14.1003 1.97206 16.07 2.85" stroke="#00C2FF" strokeWidth="2"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#00C2FF" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>Proven Results</h3>
                <p className={styles.cardDescription}>
                  With a proven track record of success, we've become the trusted partner for businesses seeking to leverage technology for competitive advantage. Our commitment to excellence ensures measurable results.
                </p>
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
                <div className={styles.memberAvatar}>👩‍💼</div>
                <h3 className={styles.memberName}>Mrs. Ambica Kumari Yadav</h3>
                <p className={styles.memberRole}>Founder & CEO</p>
                <p className={styles.memberBio}>
                  Leading our technical vision with 15+ years of experience in enterprise software development.
                </p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👨‍💻</div>
                <h3 className={styles.memberName}>Mr. Indra Dev Yadav</h3>
                <p className={styles.memberRole}>Head of Operations</p>
                <p className={styles.memberBio}>
                  Ensuring smooth project delivery and client satisfaction with expertise in agile methodologies.
                </p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👨‍🔬</div>
                <h3 className={styles.memberName}>Er. Roshan Yadav</h3>
                <p className={styles.memberRole}>Software Engineer</p>
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
    </>
  );
};

export default About;
