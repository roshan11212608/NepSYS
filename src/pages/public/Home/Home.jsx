import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Smart Digital Engineering</h1>
            <p className={styles.heroSubtitle}>
              Building scalable software solutions for modern businesses.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>Our Services</button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.techCard}>
              <div className={styles.cardHeader}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.cardTitle}>nexa-terminal</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> solution</span>
                  <span className={styles.operator}>=</span>
                  <span className={styles.string}>'nexa-platform'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>import</span>
                  <span>{' {'}Cloud, Automation, AI{'} '}</span>
                  <span className={styles.keyword}>from</span>
                  <span className={styles.string}>'@nexa/core'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.function}>deploy</span>
                  <span>(solution)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>Comprehensive digital solutions for your business</p>
        </div>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M2 17L12 22L22 17" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Software Development</h3>
            <p>Custom applications built with modern frameworks</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M18 10H6V18H18V10Z" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M6 6V10H18V6" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Cloud Solutions</h3>
            <p>Secure, scalable cloud infrastructure</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Automation</h3>
            <p>Streamlined workflows and intelligent automation</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3>IT Consulting</h3>
            <p>Strategic technology consulting</p>
          </div>
        </div>
      </section>

      {/* Why Choose NEXA */}
      <section className={styles.whyChoose}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose NEXA</h2>
          <p className={styles.sectionSubtitle}>We deliver excellence through proven expertise</p>
        </div>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#00C2FF" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Fast Delivery</h3>
            <p>Agile development with rapid deployment cycles</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#00C2FF" strokeWidth="2"/>
                <path d="M12 22V12" stroke="#00C2FF" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Secure Architecture</h3>
            <p>Enterprise-grade security built into every solution</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M2 12H22M12 2V22" stroke="#00C2FF" strokeWidth="2"/>
                <circle cx="12" cy="12" r="10" stroke="#00C2FF" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Scalable Systems</h3>
            <p>Solutions that grow with your business needs</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00C2FF" strokeWidth="2"/>
                <path d="M2 17L12 22L22 17" stroke="#00C2FF" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="#00C2FF" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Modern Tech Stack</h3>
            <p>Latest technologies and best practices</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <p className={styles.sectionSubtitle}>How we bring your ideas to life</p>
        </div>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Understand</h3>
            <p>We analyze your requirements and business goals</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Design</h3>
            <p>Create detailed solution architecture and UI/UX designs</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Build</h3>
            <p>Develop your solution with agile methodology</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3>Deliver</h3>
            <p>Deploy, test, and provide ongoing support</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section id="tech" className={styles.techStack}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <p className={styles.sectionSubtitle}>Technologies we use to build amazing solutions</p>
        </div>
        <div className={styles.techCategories}>
          <div className={styles.techCategory}>
            <h3>Backend</h3>
            <div className={styles.techItems}>
              <span>Node.js</span>
              <span>Python</span>
              <span>Java</span>
              <span>.NET</span>
            </div>
          </div>
          <div className={styles.techCategory}>
            <h3>Cloud</h3>
            <div className={styles.techItems}>
              <span>AWS</span>
              <span>Azure</span>
              <span>Google Cloud</span>
              <span>DigitalOcean</span>
            </div>
          </div>
          <div className={styles.techCategory}>
            <h3>APIs</h3>
            <div className={styles.techItems}>
              <span>REST</span>
              <span>GraphQL</span>
              <span>gRPC</span>
              <span>WebSocket</span>
            </div>
          </div>
          <div className={styles.techCategory}>
            <h3>Automation</h3>
            <div className={styles.techItems}>
              <span>Jenkins</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Client Testimonials</h2>
          <p className={styles.sectionSubtitle}>What our clients say about working with us</p>
        </div>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              "NEXA transformed our business processes. Their automation solutions increased our efficiency by 200%."
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>👨‍💼</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Rajesh Shrestha</div>
                <div className={styles.authorRole}>CEO, Tech Solutions Nepal</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              "The cloud platform developed by NEXA is robust and scalable. Excellent technical support throughout."
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>👩‍💼</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Sunita Maharjan</div>
                <div className={styles.authorRole}>CTO, Digital Nepal</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              "Their custom software solution perfectly fits our needs. Fast delivery and great communication."
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>👨‍💻</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Amit Gurung</div>
                <div className={styles.authorRole}>Founder, Himalayan Tech</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactCTA}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how we can help transform your business with smart digital solutions.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Start Your Project</button>
            <button className={styles.secondaryBtn}>Schedule Consultation</button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
