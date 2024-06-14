import React from 'react';
import styles from './ContactFiles.module.css'; 

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        
        <input type="submit" className={`${styles.hover} btn`} value="Submit" /> {/* Used styles.hover for hover effect */}
      </form>
    </section>
  );
};

export default Contact;
