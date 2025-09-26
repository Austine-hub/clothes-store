import React from 'react';
import styles from './Product2.module.css';

import pants1 from './../assets/pants/pants1.png';
import pants2 from './../assets/pants/pants2.png';
import pants3 from './../assets/pants/pants3.png';
import pants4 from './../assets/pants/pants4.png';

interface ProductItem {
  id: string;
  src: string;
  alt: string;
}

const Product2: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: '1',
      src: pants1,
      alt: 'Person wearing gray sweatshirt in forest setting'
    },
    {
      id: '2', 
      src: pants2,
      alt: 'Person wearing white sweatshirt in outdoor landscape'
    },
    {
      id: '3',
      src: pants3, 
      alt: 'Black tote bag on coastal background'
    },
    {
      id: '4',
      src: pants4,
      alt: 'Person wearing white hoodie with graphic design'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.gridItem}>
            <img
              src={product.src}
              alt={product.alt}
              className={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product2;