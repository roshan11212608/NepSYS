import React from 'react';
import styles from './Tech.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Tech = () => {
  return (
    <>
      <Header />
      <div className={styles.tech}>
        <div className={styles.techContainer}>
          
          {/* Hero Section */}
          <section className={styles.techHero}>
            <h1 className={styles.techTitle}>Our Technology Stack</h1>
            <p className={styles.techSubtitle}>
              Cutting-edge technologies that power our innovative solutions and drive digital transformation.
            </p>
          </section>

          {/* Tech Categories */}
          <section className={styles.techCategories}>
            <h2 className={styles.sectionTitle}>Technologies We Master</h2>
            <div className={styles.techGrid}>
              
              {/* Frontend Technologies */}
              <div className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>🎨</div>
                  <h3 className={styles.categoryTitle}>Frontend Development</h3>
                </div>
                <div className={styles.techItems}>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>⚛️</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>React</h4>
                      <p className={styles.itemDesc}>Modern UI framework</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🅰️</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>TypeScript</h4>
                      <p className={styles.itemDesc}>Type-safe JavaScript</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🎯</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Next.js</h4>
                      <p className={styles.itemDesc}>Full-stack framework</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>📱</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>React Native</h4>
                      <p className={styles.itemDesc}>Cross-platform mobile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>⚙️</div>
                  <h3 className={styles.categoryTitle}>Backend Development</h3>
                </div>
                <div className={styles.techItems}>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🟢</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Node.js</h4>
                      <p className={styles.itemDesc}>JavaScript runtime</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🐍</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Python</h4>
                      <p className={styles.itemDesc}>Versatile programming</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>☕</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Java</h4>
                      <p className={styles.itemDesc}>Enterprise solutions</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🗄️</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>MongoDB</h4>
                      <p className={styles.itemDesc}>NoSQL database</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>☁️</div>
                  <h3 className={styles.categoryTitle}>Cloud & DevOps</h3>
                </div>
                <div className={styles.techItems}>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🔷</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>AWS</h4>
                      <p className={styles.itemDesc}>Cloud infrastructure</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🐳</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Docker</h4>
                      <p className={styles.itemDesc}>Container platform</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>⚙️</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Kubernetes</h4>
                      <p className={styles.itemDesc}>Container orchestration</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🔄</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>CI/CD</h4>
                      <p className={styles.itemDesc}>Automated deployment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Frameworks */}
              <div className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>🛠️</div>
                  <h3 className={styles.categoryTitle}>Tools & Frameworks</h3>
                </div>
                <div className={styles.techItems}>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🎨</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Tailwind CSS</h4>
                      <p className={styles.itemDesc}>Utility-first CSS</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🔧</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>Webpack</h4>
                      <p className={styles.itemDesc}>Module bundler</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>📊</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>GraphQL</h4>
                      <p className={styles.itemDesc}>Query language</p>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.itemIcon}>🔐</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemName}>JWT Auth</h4>
                      <p className={styles.itemDesc}>Secure authentication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Build Something Amazing?</h2>
            <p className={styles.ctaSubtitle}>
              Let's leverage these technologies to create your next digital masterpiece.
            </p>
            <button className={styles.ctaButton}>Start Your Project</button>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tech;
