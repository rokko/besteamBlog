import React from "react";
import styles from "./ContactUs.module.scss";
import { FaEnvelope } from "react-icons/fa"; // Usa l'icona email da FontAwesome

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.contactText}>
        Contact us <FaEnvelope className={styles.icon} /> 
        <a href="mailto:metaverse@besteam.io" className={styles.email}>metaverse@besteam.io</a>
      </p>
      
    </div>
  );
};

export default ContactUs;
