// src/components/Hero.tsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  autoPlay?: boolean;
  interval?: number; // autoplay interval
}

const Hero: React.FC<HeroProps> = ({
  title = "Bird T-Shirts",
  subtitle = "Organic cotton RSPB t-shirts, jumpers and hoodies for bird lovers",
  primaryButtonText = "Men",
  secondaryButtonText = "Women",
  onPrimaryClick,
  onSecondaryClick,
  className,
  autoPlay = true,
  interval = 8000,
}) => {
  // Centralized image array with alt text for accessibility
  const heroImages = useMemo(
    () => [
      { src: "/hero-images/hero3.png", alt: "Model wearing bird-themed T-shirt" },
      { src: "/hero-images/hero1.png", alt: "Organic cotton hoodie for bird lovers" },
      { src: "/hero-images/hero5.png", alt: "Bird print jumper displayed on a hanger" },
      { src: "/hero-images/hero4.png", alt: "Nature-inspired T-shirt outdoors" },
      { src: "/hero-images/hero2.png", alt: "Couple in bird design apparel" },
      { src: "/hero-images/hero6.png", alt: "Bird lover’s clothing flat lay" },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  }, [heroImages.length]);

  // Auto-advance with pause on hover/focus
  useEffect(() => {
    if (!autoPlay || paused) return;
    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId);
  }, [autoPlay, paused, interval, nextSlide]);

  return (
    <section
      className={`${styles.hero} ${className || ""}`}
      role="region"
      aria-label="Hero product showcase"
    >
      <div
        className={styles.heroContainer}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Hero image with lazy loading */}
        <div className={styles.imageWrapper}>
          <img
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className={styles.heroImage}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Overlay text content */}
        <div className={styles.heroContent}>
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

        {/* Carousel indicators */}
        <nav
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
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </nav>

        {/* Navigation arrows */}
        <button
          type="button"
          className={`${styles.navArrow} ${styles.prevArrow}`}
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.navArrow} ${styles.nextArrow}`}
          aria-label="Next slide"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Hero;
