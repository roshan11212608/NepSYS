import React from 'react';
import styles from './Solutions.module.css';

const Solutions = () => {
  return (
    <>
      <div className={styles.solutions}>
        <div className={styles.solutionsContainer}>
          
          {/* Hero Section */}
          <section className={styles.solutionsHero}>
            <div className={styles.heroIcon}>💡</div>
            <h1 className={styles.solutionsTitle}>3️⃣ Solutions</h1>
            <h2 className={styles.solutionsPurpose}>🎯 Purpose: Show ready-to-deploy systems.</h2>
            <h3 className={styles.solutionsFlowTitle}>🔥 Example Solutions for NEXA:</h3>
          </section>

          {/* Solutions Grid */}
          <section className={styles.solutionsGrid}>
            
            {/* School Attendance System */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <h3 className={styles.solutionTitle}>School Attendance System (SaaS)</h3>
                <div className={styles.solutionIcon}>🏫</div>
              </div>
              
              <div className={styles.solutionContent}>
                <div className={styles.problemSection}>
                  <h4 className={styles.sectionLabel}>Problem</h4>
                  <p className={styles.problemText}>
                    Manual attendance tracking is time-consuming, error-prone, and lacks real-time insights for educational institutions.
                  </p>
                </div>
                
                <div className={styles.solutionSection}>
                  <h4 className={styles.sectionLabel}>Your Solution</h4>
                  <p className={styles.solutionText}>
                    Automated face recognition-based attendance system with real-time reporting and analytics dashboard.
                  </p>
                </div>
                
                <div className={styles.featuresSection}>
                  <h4 className={styles.sectionLabel}>Key Features</h4>
                  <div className={styles.featuresList}>
                    <div className={styles.featureItem}>🔍 Face recognition</div>
                    <div className={styles.featureItem}>📊 Dashboard</div>
                    <div className={styles.featureItem}>📈 Reports</div>
                  </div>
                </div>
                
                <button className={styles.ctaButton}>Request Demo</button>
              </div>
            </div>

            {/* Custom ERP Systems */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <h3 className={styles.solutionTitle}>Custom ERP Systems</h3>
                <div className={styles.solutionIcon}>🏢</div>
              </div>
              
              <div className={styles.solutionContent}>
                <div className={styles.problemSection}>
                  <h4 className={styles.sectionLabel}>Problem</h4>
                  <p className={styles.problemText}>
                    Businesses struggle with disconnected systems and inefficient processes across departments.
                  </p>
                </div>
                
                <div className={styles.solutionSection}>
                  <h4 className={styles.sectionLabel}>Your Solution</h4>
                  <p className={styles.solutionText}>
                    Tailored ERP solutions integrating all business functions into a unified, scalable platform.
                  </p>
                </div>
                
                <div className={styles.featuresSection}>
                  <h4 className={styles.sectionLabel}>Key Features</h4>
                  <div className={styles.featuresList}>
                    <div className={styles.featureItem}>👥 HR Management</div>
                    <div className={styles.featureItem}>📦 Inventory</div>
                    <div className={styles.featureItem}>⚙️ Operations</div>
                  </div>
                </div>
                
                <button className={styles.ctaButton}>Request Demo</button>
              </div>
            </div>

            {/* Startup MVP Development */}
            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <h3 className={styles.solutionTitle}>Startup MVP Development</h3>
                <div className={styles.solutionIcon}>🚀</div>
              </div>
              
              <div className={styles.solutionContent}>
                <div className={styles.problemSection}>
                  <h4 className={styles.sectionLabel}>Problem</h4>
                  <p className={styles.problemText}>
                    Startups need to validate ideas quickly with limited resources and tight deadlines.
                  </p>
                </div>
                
                <div className={styles.solutionSection}>
                  <h4 className={styles.sectionLabel}>Your Solution</h4>
                  <p className={styles.solutionText}>
                    Rapid MVP development with lean methodology to get your product to market fast.
                  </p>
                </div>
                
                <div className={styles.featuresSection}>
                  <h4 className={styles.sectionLabel}>Key Features</h4>
                  <div className={styles.featuresList}>
                    <div className={styles.featureItem}>⏱️ Build in weeks</div>
                    <div className={styles.featureItem}>🏗️ Scalable foundation</div>
                    <div className={styles.featureItem}>🔄 Iterative development</div>
                  </div>
                </div>
                
                <button className={styles.ctaButton}>Request Demo</button>
              </div>
            </div>

          </section>

          </div>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaSubtitle}>
              Let's discuss how our ready-to-deploy solutions can accelerate your growth and streamline operations.
            </p>
            <button className={styles.mainCtaButton}>Get Started Today</button>
          </section>

        </div>
      
    </>
  );
};

export default Solutions;
