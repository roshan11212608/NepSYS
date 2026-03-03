import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      
      <div className={styles.contact}>
        <div className={styles.contactContainer}>
          
          {/* Hero Section */}
          <section className={styles.contactHero}>
            <h1 className={styles.contactTitle}>Get In Touch</h1>
            <p className={styles.contactSubtitle}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </section>

          {/* Contact Content Section */}
          <section className={styles.contactContent}>
            <div className={styles.contactGrid}>
              
              {/* Contact Information */}
              <div className={styles.contactInfo}>
                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <div className={styles.infoIcon}>📍</div>
                    <h3 className={styles.infoTitle}>Visit Our Office</h3>
                  </div>
                  <div className={styles.infoContent}>
                    123 Tech Street<br />
                    Silicon Valley, CA 94025<br />
                    United States
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <div className={styles.infoIcon}>📞</div>
                    <h3 className={styles.infoTitle}>Call Us</h3>
                  </div>
                  <div className={styles.infoContent}>
                    <a href="tel:+1234567890">+1 (234) 567-890</a><br />
                    <a href="tel:+0987654321">+0 (987) 654-321</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <div className={styles.infoIcon}>✉️</div>
                    <h3 className={styles.infoTitle}>Email Us</h3>
                  </div>
                  <div className={styles.infoContent}>
                    <a href="mailto:info@nexa.com">info@nexa.com</a><br />
                    <a href="mailto:support@nexa.com">support@nexa.com</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <div className={styles.infoIcon}>🕐</div>
                    <h3 className={styles.infoTitle}>Business Hours</h3>
                  </div>
                  <div className={styles.infoContent}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.contactFormSection}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+1 (234) 567-890" 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Message *</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell us more about your project or inquiry..." 
                      required 
                    />
                  </div>
                  
                  <button type="submit" className={styles.formButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className={styles.mapSection}>
            <h2 className={styles.mapTitle}>Find Us Here</h2>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                🗺️ Interactive Map Coming Soon<br />
                <small>Our office is located in the heart of Silicon Valley</small>
              </div>
            </div>
          </section>

        </div>
      </div>
      
    </>
  );
};

export default Contact;
