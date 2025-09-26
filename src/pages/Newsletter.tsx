// src/pages/Newsletter.tsx
import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react"; // ✅ type-only import (fixes TS1484 error)
import styles from "./Newsletter.module.css";

interface FormData {
  firstName: string;
  email: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
}

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Extract regex to avoid re-creating it every validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      // Clear error dynamically when user corrects input
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("✅ Newsletter subscription successful:", formData);

      // Reset form after success
      setFormData({ firstName: "", email: "" });
      setErrors({});
    } catch (error) {
      console.error("❌ Subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Don't Miss Out</h2>
        <p className={styles.subtitle}>
          Don&apos;t miss out on the latest product launches and updates. Sign
          up to our newsletter.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* First name input */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
              className={`${styles.input} ${
                errors.firstName ? styles.inputError : ""
              }`}
              aria-label="First name"
              aria-invalid={!!errors.firstName}
              disabled={isLoading}
            />
            {errors.firstName && (
              <span className={styles.errorText} role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* Email input */}
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
              className={`${styles.input} ${
                errors.email ? styles.inputError : ""
              }`}
              aria-label="Email address"
              aria-invalid={!!errors.email}
              disabled={isLoading}
            />
            {errors.email && (
              <span className={styles.errorText} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
            aria-label="Subscribe to newsletter"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        <footer className={styles.footer}>
          <a href="/privacy-policy" className={styles.privacyLink}>
            Privacy policy
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Newsletter;
