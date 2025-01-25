import "react";
import "./Product";
import './App.css'
import PropTypes from 'prop-types';

const Cart = ({ cart, removeFromCart, totalCartPrice }) => {
    return (
        <div className="cart">
            <h2>Cart</h2>

            {cart.length > 0 ? (
                <ul>
                    {cart.map((item, idx) => (
                        <li key={idx}>
                            {item.title} - ${item.price.toFixed(2)}
                            <button
                                onClick={() => removeFromCart(idx)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}

            <h3>Total: ${totalCartPrice.toFixed(2)}</h3>
        </div>
    );
};


Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    totalCartPrice: PropTypes.number.isRequired,
};

export default Cart;