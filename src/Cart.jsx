import "react";
import "./Product";

// eslint-disable-next-line react/prop-types
const Cart = ({ cart, removeFromCart, totalCartPrice }) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
           

            {/* eslint-disable-next-line react/prop-types */}
            {cart.length > 0 ? (
                <ul>
                    
                    {/* eslint-disable-next-line react/prop-types */}
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
            {/* eslint-disable-next-line react/prop-types */}
            <h3>Total: ${totalCartPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
