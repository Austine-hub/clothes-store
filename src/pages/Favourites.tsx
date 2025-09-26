import React from "react";
import styles from "./Favourites.module.css";

import shirt1 from "./../assets/shirts/shirt1.png";
import shirt2 from "./../assets/shirts/shirt2.png";
import shirt3 from "./../assets/shirts/shirt3.png"; // ✅ fixed typo
import shirt4 from "./../assets/shirts/shirt4.png";
import shirt5 from "./../assets/shirts/shirt5.png";
import shirt6 from "./../assets/shirts/shirt6.png";
import shirt7 from "./../assets/shirts/shirt7.png";
import shirt8 from "./../assets/shirts/shirt8.png";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
}

const products: ReadonlyArray<Product> = [
  {
    id: "1",
    name: "Team Wildbird Light Crewneck T-Shirt",
    price: "$32",
    image: shirt1,
    alt: "Light green t-shirt with wildbird design",
  },
  {
    id: "2",
    name: "Know Your Birds Oversized Sweatshirt",
    price: "$58",
    image: shirt2,
    alt: "Cream colored oversized sweatshirt",
  },
  {
    id: "3",
    name: "Embroidered Journal",
    price: "$18",
    image: shirt3,
    alt: "Orange embroidered journal",
  },
  {
    id: "4",
    name: "Olive Chorus Oversized Jumper",
    price: "$67",
    image: shirt4,
    alt: "Olive green oversized jumper",
  },
  {
    id: "5",
    name: "Blue Tit Tote Bag",
    price: "$24",
    image: shirt5,
    alt: "White tote bag with blue tit design",
  },
  {
    id: "6",
    name: "Puffin Unisex Hoodie",
    price: "$56",
    image: shirt6,
    alt: "Black hoodie with puffin design",
  },
  {
    id: "7",
    name: "Together We Fly Tee",
    price: "$32",
    image: shirt7,
    alt: "Black t-shirt with together we fly text",
  },
  {
    id: "8",
    name: "Bird Nerd Ceramic Mug",
    price: "$18",
    image: shirt8,
    alt: "White ceramic mug with bird nerd text",
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <article className={styles.productCard}>
    <div className={styles.imageContainer}>
      <img
        src={product.image}
        alt={product.alt}
        className={styles.productImage}
        loading="lazy"
      />
    </div>
    <div className={styles.productInfo}>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price}</p>
    </div>
  </article>
);

const Favourites = () => {
  return (
    <section className={styles.container} aria-labelledby="favourites-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 id="favourites-title" className={styles.title}>
            Current Market Favorites
          </h1>
        </header>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.primaryButton}`}
            type="button"
            onClick={() => console.log("Shop Now clicked")}
          >
            Shop Now
          </button>
          <button
            className={`${styles.button} ${styles.secondaryButton}`}
            type="button"
            onClick={() => console.log("Shop Brands clicked")}
          >
            Shop Brands
          </button>
        </div>

        <div className={styles.featuredSection}>
          <div className={styles.featuredImageContainer}>
            <img
              src="/model1.png" // ✅ use public/ path correctly
              alt="Model wearing seasonal favorites merchandise in autumn field"
              className={styles.featuredImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
