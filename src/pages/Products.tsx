import React from 'react';
import styles from './Products.module.css';



import clothes1 from './../assets/clothes/clothes1.png';
import clothes2 from './../assets/clothes/clothes2.png';
import clothes3 from './../assets/clothes/clothes3.png';
import clothes4 from './../assets/clothes/clothes4.png';
import clothes5 from './../assets/clothes/clothes5.png';
import clothes6 from './../assets/clothes/clothes6.png';
import clothes7 from './../assets/clothes/clothes7.png';
import clothes8 from './../assets/clothes/clothes8.png';


interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const Products: React.FC = () => {
  const popularProducts: Product[] = [
    {
      id: 1,
      name: 'RSPB Nature Bird Cap',
      price: '£27',
      image: clothes1
    },
    {
      id: 2,
      name: 'Goldcrest and Pine Notebook',
      price: '£15',
      image: clothes2
    },
    {
      id: 3,
      name: 'Garden Guests Mug',
      price: '£20',
      image: clothes3
    },
    {
      id: 4,
      name: 'Know Your Birds Tote Bag',
      price: '£12',
      image: clothes4
    },
    {
      id: 5,
      name: 'Swift Men\'s Oversized Sweatshirt',
      price: '£55',
      image: clothes5
    },
    {
      id: 6,
      name: 'Coffee and Curlews Club Hoodie',
      price: '£53',
      image: clothes6
    },
    {
      id: 7,
      name: 'Dawn Chorus Oversized Jumper',
      price: '£55',
      image: clothes7,
    },
    {
      id: 8,
      name: 'Bird Pattern T-shirt',
      price: '£27',
      image: clothes8,
    }
  ];

  return (
    <div className={styles.container}>
      {/* Most Popular Products Section */}
      <section className={styles.section}>
        <div className={styles.headerDark}>
          <h2 className={styles.sectionTitle}>Most popular products</h2>
        </div>
        <div className={styles.productGrid}>
          {popularProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Products;