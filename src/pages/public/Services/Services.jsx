import React from 'react';

import styles from './Services.module.css';

const Services = () => (
  <>

    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h1 className={styles.servicesTitle}>Our Services</h1>
          <p className={styles.servicesSubtitle}>
            Comprehensive digital solutions powered by cutting-edge technology and proven expertise
          </p>
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
            <h3 className={styles.serviceTitle}>Software Development</h3>
            <p className={styles.serviceDescription}>
              Custom applications built with modern frameworks and scalable architecture for enterprise-grade performance. We deliver robust solutions tailored to your specific business requirements.
            </p>
            <div className={styles.serviceBenefit}>
              <strong>Benefit:</strong> Scalable applications that grow with your business
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M18 10H6V18H18V10Z" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M6 6V10H18V6" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M8 2V6" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M16 2V6" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Cloud Solutions</h3>
            <p className={styles.serviceDescription}>
              Secure, scalable cloud infrastructure and migration services to optimize your digital ecosystem. We help you leverage the power of cloud computing for maximum efficiency.
            </p>
            <div className={styles.serviceBenefit}>
              <strong>Benefit:</strong> Reduced infrastructure costs and improved scalability
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Automation</h3>
            <p className={styles.serviceDescription}>
              Streamlined workflows and intelligent automation systems to enhance business efficiency and productivity. We implement cutting-edge automation solutions.
            </p>
            <div className={styles.serviceBenefit}>
              <strong>Benefit:</strong> Increased operational efficiency and reduced manual errors
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M12 22V12" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M12 12L2 7" stroke="#2F80ED" strokeWidth="2"/>
                <path d="M12 12L22 7" stroke="#2F80ED" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>IT Consulting</h3>
            <p className={styles.serviceDescription}>
              Strategic technology consulting to drive digital transformation and optimize your IT infrastructure. We provide expert guidance for your technology roadmap.
            </p>
            <div className={styles.serviceBenefit}>
              <strong>Benefit:</strong> Strategic technology alignment with business goals
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how our services can help you achieve your digital transformation goals.
          </p>
          <button className={styles.ctaButton}>Get Started Today</button>
        </div>
      </div>
    </div>
    
  </>
);

export default Services;
