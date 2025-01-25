import { useState } from 'react';
import Product from './Product';
import './App.css';

// Import the JSON data
import productsData from './products.json';

const App = () => {
    const [products] = useState(productsData.data);
    const [cart, setCart] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSortChange = (e) => setSortOption(e.target.value);
    const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());

    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

    const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
            case 'price-asc': return a.price - b.price;
            case 'price-desc': return b.price - a.price;
            case 'name-asc': return a.title.localeCompare(b.title);
            case 'name-desc': return b.title.localeCompare(a.title);
            default: return 0;
        }
    });

    const filteredProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container">
            <h1 className="header">Laptops</h1>
            <input
                type="text"
                placeholder="მოძებნეთ ლეპტოპები..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />
            <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
                <option value="">დალაგება</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
            </select>

            <div className="product-list">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-item">
                        <Product {...product} />
                        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart">
                <h2>Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item, idx) => (
                            <li key={idx}>
                                {item.title} - ${item.price.toFixed(2)}
                                <button onClick={() => removeFromCart(idx)} className="remove-btn">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <p>Total: ${totalCartPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default App;
