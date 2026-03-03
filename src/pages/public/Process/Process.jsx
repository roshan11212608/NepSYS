import React from 'react';
import styles from './Process.module.css';

const Process = () => {
  return (
    <>
      <div className={styles.process}>
        <div className={styles.processContainer}>
          
          {/* Hero Section */}
          <section className={styles.processHero}>
            <div className={styles.heroIcon}>⚙</div>
            <h1 className={styles.processTitle}>4️⃣ Process</h1>
            <h2 className={styles.processPurpose}>🎯 Purpose: Build trust through structure.</h2>
            <h3 className={styles.processFlowTitle}>🔥 4-Step Professional Flow:</h3>
          </section>

          {/* Process Steps */}
          <section className={styles.processSteps}>
            <div className={styles.stepsGrid}>
              
              {/* Step 1 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Discover</h3>
                  <div className={styles.stepSubItems}>
                    <div className={styles.subItem}>Requirements</div>
                    <div className={styles.subItem}>Research</div>
                    <div className={styles.subItem}>Strategy</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Design</h3>
                  <div className={styles.stepSubItems}>
                    <div className={styles.subItem}>Wireframes</div>
                    <div className={styles.subItem}>UI/UX</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Develop</h3>
                  <div className={styles.stepSubItems}>
                    <div className={styles.subItem}>Agile development</div>
                    <div className={styles.subItem}>Clean architecture</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Deploy & Scale</h3>
                  <div className={styles.stepSubItems}>
                    <div className={styles.subItem}>Cloud deployment</div>
                    <div className={styles.subItem}>Monitoring</div>
                    <div className={styles.subItem}>Maintenance</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Process Timeline */}
          <section className={styles.processTimeline}>
            <h2 className={styles.sectionTitle}>📅 Project Timeline</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>🔍</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 1-2</h3>
                  <p className={styles.timelineDesc}>Discover Phase - Requirements, Research & Strategy</p>
                  <div className={styles.timelineDetails}>
                    <span>📋 Requirements gathering</span>
                    <span>🔬 Market research</span>
                    <span>📊 Strategy development</span>
                  </div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>🎨</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 3-4</h3>
                  <p className={styles.timelineDesc}>Design Phase - Wireframes & UI/UX</p>
                  <div className={styles.timelineDetails}>
                    <span>🖼️ Wireframe creation</span>
                    <span>🎯 UI/UX design</span>
                    <span>✨ Prototyping</span>
                  </div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>💻</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 5-8</h3>
                  <p className={styles.timelineDesc}>Develop Phase - Agile Development & Clean Architecture</p>
                  <div className={styles.timelineDetails}>
                    <span>🚀 Agile sprints</span>
                    <span>🏗️ Clean architecture</span>
                    <span>🧪 Code reviews</span>
                  </div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>☁️</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 9-10</h3>
                  <p className={styles.timelineDesc}>Deploy & Scale - Cloud Deployment & Monitoring</p>
                  <div className={styles.timelineDetails}>
                    <span>☁️ Cloud deployment</span>
                    <span>📊 Performance monitoring</span>
                    <span>🔧 Optimization</span>
                  </div>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}>🔄</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 11+</h3>
                  <p className={styles.timelineDesc}>Maintenance - Ongoing Support & Updates</p>
                  <div className={styles.timelineDetails}>
                    <span>🛠️ Maintenance</span>
                    <span>📈 Updates</span>
                    <span>🎯 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
            <p className={styles.ctaSubtitle}>
              Let's work together to bring your digital vision to life with our proven process.
            </p>
            <button className={styles.ctaButton}>Get Started</button>
          </section>

        </div>
      </div>
    </>
  );
};

export default Process;
