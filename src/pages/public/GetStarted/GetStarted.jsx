import React, { useState } from 'react';
import styles from './GetStarted.module.css';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'web-development',
    timeline: '',
    budget: '',
    description: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.getStarted}>
        <div className={styles.getStartedContainer}>
          <section className={styles.successSection}>
            <div className={styles.successIcon}>🎉</div>
            <h1 className={styles.successTitle}>Thank You!</h1>
            <p className={styles.successMessage}>
              We've received your project inquiry and will get back to you within 24 hours.
            </p>
            <p className={styles.successSubMessage}>
              Our team is excited to discuss how we can help bring your vision to life.
            </p>
            <button 
              className={styles.homeButton}
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </button>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.getStarted}>
      <div className={styles.getStartedContainer}>
        
        {/* Hero Section */}
        <section className={styles.getStartedHero}>
          <div className={styles.heroIcon}>🚀</div>
          <h1 className={styles.getStartedTitle}>Get Started</h1>
          <h2 className={styles.getStartedSubtitle}>Let's Build Something Amazing Together</h2>
          <p className={styles.getStartedDescription}>
            Ready to transform your ideas into reality? Fill out the form below and our team will get back to you within 24 hours to discuss your project.
          </p>
        </section>

        {/* Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <form className={styles.consultationForm} onSubmit={handleSubmit}>
              
              {/* Contact Information */}
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>Contact Information</h3>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Acme Corp"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>Project Details</h3>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="projectType" className={styles.label}>Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={styles.select}
                      required
                    >
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="erp-system">ERP System</option>
                      <option value="saas-product">SaaS Product</option>
                      <option value="startup-mvp">Startup MVP</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="timeline" className={styles.label}>Expected Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-12-months">6-12 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="budget" className={styles.label}>Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select Budget Range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="preferredContact" className={styles.label}>Preferred Contact Method</label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="video">Video Call</option>
                      <option value="any">Any Method</option>
                    </select>
                  </div>
                </div>
                
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="description" className={styles.label}>Project Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    rows={6}
                    placeholder="Tell us about your project, goals, and what you're looking to achieve..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className={styles.submitSection}>
                <div className={styles.submitHeader}>
                  <h3 className={styles.submitTitle}>Ready to Get Started?</h3>
                  <p className={styles.submitSubtitle}>
                    Submit your project inquiry and we'll respond within 24 hours with a personalized consultation plan.
                  </p>
                </div>
                
                <div className={styles.submitBenefits}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>⚡</span>
                    <span className={styles.benefitText}>24-hour response guarantee</span>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>🎯</span>
                    <span className={styles.benefitText}>Free initial consultation</span>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>📊</span>
                    <span className={styles.benefitText}>Custom project roadmap</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      🚀 Submit Project Inquiry
                      <span className={styles.buttonSubtext}>Get your free consultation →</span>
                    </>
                  )}
                </button>
                
                <div className={styles.trustIndicators}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>🔒</span>
                    <span className={styles.trustText}>100% Secure & Confidential</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✓</span>
                    <span className={styles.trustText}>No spam, ever</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>🏆</span>
                    <span className={styles.trustText}>50+ successful projects</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Alternative CTAs */}
        <section className={styles.alternativeCtas}>
          <h3 className={styles.alternativeTitle}>Prefer to talk directly?</h3>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>
              📞 Schedule a Call
            </button>
            <button className={styles.ctaButton}>
              📅 Book a Consultation
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GetStarted;
