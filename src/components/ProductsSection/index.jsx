import React from 'react';
import { produkt1_1, produkt2_1 } from '../../../images';
import styles from './styles.module.css';

const Product = ({ name, description, price, image }) => {
    return (
        <div className={styles.productItem}>
            <img className={styles.productPhoto} src={image} alt={name}/>
            <h2 className={styles.productName}>{ name }</h2>
            { description && <p className={styles.productDescription}>{ description }</p> }
            <p className={styles.productPrice}>{price} zl</p>
            <button className={styles.productBuyButton}>Buy Now</button>
        </div>
    )
}

const ProductsSection = () => {
    return (
        <section id="products" className={styles.productsGrid}>
            <Product name="Czapka" price={25.00} image={produkt1_1} />
            <Product name="Parownik" price={100.00} image={produkt2_1} />
            <Product name="Product 3" description="Description of Product 3" price={50.00} image="https://via.placeholder.com/150" />
            <Product name="Product 4" description="Description of Product 4" price={75.00} image="https://via.placeholder.com/150" />
        </section>
    )
}

export { ProductsSection };
