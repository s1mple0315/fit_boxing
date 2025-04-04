import React, { useState } from "react";
import axios from "axios";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      const response = await axios.post("http://localhost:8000/send-feedback", formData);

      if (response.status === 200) {
        setSubmissionStatus("Thank you for your feedback! We will get back to you shortly.");
        onClose(); 
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmissionStatus("There was an error submitting your feedback. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null; 

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Оставьте заявку</h2>
        <p>наш менеджер свяжется с вами в течение 15 минут</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Введите имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="phone_number"
              placeholder="+7"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Оставить заявку"}
          </button>
        </form>
        <p className={styles.footerText}>
          Оставляя заявку вы соглашаетесь с{" "}
          <a href="/privacy-policy">политикой конфиденциальности</a>
        </p>
        {submissionStatus && <p className={styles.statusMessage}>{submissionStatus}</p>}
      </div>
    </div>
  );
};

export default Modal;
