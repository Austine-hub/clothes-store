// src/components/Hero.tsx
import React, { useState, useEffect, useCallback } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Bird T-Shirts",
  subtitle = "Organic cotton RSPB t-shirts, jumpers and hoodies for bird lovers",
  primaryButtonText = "Men",
  secondaryButtonText = "Women",
  onPrimaryClick,
  onSecondaryClick,
  className,
}) => {
  // Placeholder hero images (put them in /public/hero-images/)
        const heroImages: string[] = [
        "/hero-images/hero3.png",
        "/hero-images/hero1.png",
        "/hero-images/hero5.png",
        "/hero-images/hero4.png",
        "/hero-images/hero2.png",
        "/hero-images/hero6.png",
        ];


  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to next/prev image
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  }, [heroImages.length]);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className={`${styles.hero} ${className || ""}`}
      style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
      role="banner"
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={`${styles.heroButton} ${styles.primaryButton}`}
                onClick={onPrimaryClick}
                aria-label={`Shop ${primaryButtonText} clothing`}
              >
                {primaryButtonText}
              </button>
              <button
                type="button"
                className={`${styles.heroButton} ${styles.secondaryButton}`}
                onClick={onSecondaryClick}
                aria-label={`Shop ${secondaryButtonText} clothing`}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div
          className={styles.carouselIndicators}
          role="tablist"
          aria-label="Carousel navigation"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              aria-selected={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              role="tab"
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          className={`${styles.navArrow} ${styles.prevArrow}`}
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.navArrow} ${styles.nextArrow}`}
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
