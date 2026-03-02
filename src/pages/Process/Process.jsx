import React from 'react';
import styles from './Process.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Process = () => {
  return (
    <>
      <Header />
      <div className={styles.process}>
        <div className={styles.processContainer}>
          
          {/* Hero Section */}
          <section className={styles.processHero}>
            <h1 className={styles.processTitle}>Our Process</h1>
            <p className={styles.processSubtitle}>
              A systematic approach to delivering exceptional digital solutions that drive business growth.
            </p>
          </section>

          {/* Process Steps */}
          <section className={styles.processSteps}>
            <h2 className={styles.sectionTitle}>How We Work</h2>
            <div className={styles.stepsGrid}>
              
              {/* Step 1 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Discovery</h3>
                  <p className={styles.stepDescription}>
                    We begin by thoroughly understanding your business objectives, target audience, and technical requirements. 
                    Our team conducts comprehensive research and analysis to identify opportunities and challenges.
                  </p>
                  <ul className={styles.stepFeatures}>
                    <li>Business analysis</li>
                    <li>Requirements gathering</li>
                    <li>Market research</li>
                    <li>Stakeholder interviews</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Planning</h3>
                  <p className={styles.stepDescription}>
                    Based on our findings, we create a detailed project roadmap with clear milestones, timelines, and deliverables. 
                    We establish the technical architecture and select the optimal technology stack.
                  </p>
                  <ul className={styles.stepFeatures}>
                    <li>Project roadmap</li>
                    <li>Technical architecture</li>
                    <li>Resource allocation</li>
                    <li>Risk assessment</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Development</h3>
                  <p className={styles.stepDescription}>
                    Our expert developers bring your vision to life using agile methodologies. We build incrementally, 
                    with regular sprints, code reviews, and quality assurance at every stage.
                  </p>
                  <ul className={styles.stepFeatures}>
                    <li>Agile development</li>
                    <li>Code reviews</li>
                    <li>Quality assurance</li>
                    <li>Continuous integration</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Deployment</h3>
                  <p className={styles.stepDescription}>
                    We ensure a smooth deployment process with comprehensive testing, user training, and documentation. 
                    Our team provides ongoing support and maintenance to ensure long-term success.
                  </p>
                  <ul className={styles.stepFeatures}>
                    <li>Deployment planning</li>
                    <li>User training</li>
                    <li>Documentation</li>
                    <li>Ongoing support</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Process Timeline */}
          <section className={styles.processTimeline}>
            <h2 className={styles.sectionTitle}>Project Timeline</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 1-2</h3>
                  <p className={styles.timelineDesc}>Discovery & Planning Phase</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 3-8</h3>
                  <p className={styles.timelineDesc}>Development Phase</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 9-10</h3>
                  <p className={styles.timelineDesc}>Testing & Deployment</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Week 11+</h3>
                  <p className={styles.timelineDesc}>Support & Maintenance</p>
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
      <Footer />
    </>
  );
};

export default Process;
