import React, { useState } from "react";
import styles from "./Newsletterform.module.scss";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email registrata: ${email}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        JOIN
      </button>
    </form>
  );
};

export default NewsletterForm;
