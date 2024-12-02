import React from 'react';
import { MainLayout } from 'modules/layouts';
import { cartItems } from "./cart-items";
import styles from './styles.module.css';


const CartItem = ({ id, photo, name, quantity, price, removeItem, updateQuantity }) => {
    const [quantityValue, setQuantityValue] = React.useState(quantity);

    const handleQuantityChange = (event) => {
        setQuantityValue(event.target.value);
        updateQuantity(id, parseInt(event.target.value));
    }

    return (
        <tr>
            <td>
                <img className={styles.cartProductPhoto} src={photo} alt={name}/>
            </td>
            <td>
                <input className={styles.numberInput} onChange={handleQuantityChange} type="number" defaultValue={quantity} value={quantityValue} min="0"/>
            </td>
            <td>{price} zł</td>
            <td>{price * quantityValue} zł</td>
            <td className={styles.removeButtonTableCell}>
                <button onClick={() => removeItem(id)} className={styles.removeButton}>Remove</button>
            </td>
        </tr>
    )
}

const Cart = () => {
    const [cartItemsList, setCartItemsList] = React.useState(cartItems);
    const totalPrice = cartItemsList.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);

    const handleRemoveItem = (id) => {
        setCartItemsList(cartItemsList.filter((cartItem) => cartItem.id !== id));
    }

    const handleUpdateQuantity = (id, quantity) => {
        setCartItemsList(cartItemsList.map((cartItem) => {
            if (cartItem.id === id) {
                return {
                    ...cartItem,
                    quantity
                }
            }

            return cartItem;
        }));
    }

    return (
        <MainLayout>
            <section className={styles.cartSection}>
                <h2 className={styles.cartSectionTitle}>Your Shopping Cart</h2>
                <table className={styles.cartTable}>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartItemsList.map((cartItem) => (
                            <CartItem removeItem={handleRemoveItem} updateQuantity={handleUpdateQuantity} key={cartItem.id} {...cartItem} />
                        ))
                    }
                </tbody>
            </table>
                <div className={styles.cartSummary}>
                    <p>
                        <strong>Total: { totalPrice } zł</strong>
                    </p>
                    <button className={styles.proceedButton}>Proceed to checkout</button>
                </div>
            </section>
        </MainLayout>
    )
}

export {Cart};
