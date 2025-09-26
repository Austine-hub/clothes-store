// src/pages/Newsletter.tsx
import { useState, useCallback, useMemo } from "react";
import type { FormEvent, ChangeEvent } from "react";
import styles from "./Newsletter.module.css";

interface FormData {
  firstName: string;
  email: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
}

export default function Newsletter() {
  const [formData, setFormData] = useState<FormData>({ firstName: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // ✅ Memoized regex to avoid recreation
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, emailRegex]);

  const handleInputChange =
    (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setFormData((prev) => ({ ...prev, [field]: value }));

      // Clear error dynamically
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("✅ Newsletter subscription successful:", formData);

      // Reset form & show success message
      setFormData({ firstName: "", email: "" });
      setErrors({});
      setSuccessMessage("Thanks for subscribing! 🎉");
    } catch (error) {
      console.error("❌ Subscription failed:", error);
      setErrors({ email: "Subscription failed. Try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.container} aria-labelledby="newsletter-heading">
      <div className={styles.content}>
        <h2 id="newsletter-heading" className={styles.title}>
          Don&apos;t Miss Out
        </h2>
        <p className={styles.subtitle}>
          Sign up to our newsletter for product launches and updates.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* First name input */}
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.visuallyHidden}>
              First name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
              className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`}
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
            <label htmlFor="email" className={styles.visuallyHidden}>
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
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
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {/* Success feedback */}
        {successMessage && (
          <p className={styles.successText} role="status">
            {successMessage}
          </p>
        )}

        <footer className={styles.footer}>
          <a href="/privacy-policy" className={styles.privacyLink}>
            Privacy policy
          </a>
        </footer>
      </div>
    </section>
  );
}

