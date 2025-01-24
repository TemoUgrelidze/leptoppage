import  { useState } from 'react';
import Product from './Product';
import './App.css';

const initialProducts = [
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F40051cd7-217c-4931-85a0-f1c93ff69059_Thumb.jpeg&w=384&q=50',
        title: 'Dell Vostro 3520 15.6"',
        description: 'Intel i3-1215U 8GB 256GB SSD - N1614PVNB3520GE',
        price: 1190.00,
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F5a9f7ff8-2944-4110-9329-76221edec6ea_Thumb.jpeg&w=640&q=100',
        title: 'Lenovo V15 G4 AMN 15.6"',
        description: 'AMD Ryzen 3 7320U 8GB 256GB SSD - 82YU00VJRU',
        price: 950.00,
        oldPrice: 1190.00,
        badge: 'SALE',
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F2ee71d0d-5ec9-40b6-a268-875c46815a65_Thumb.jpeg&w=640&q=100',
        title: 'Acer Aspire 3 A315-59 15.6"',
        description: 'Intel i3-1215U 8GB 512GB SSD - NX.K6TER.006',
        price: 1099.00,
        oldPrice: 1199.00,
        badge: 'SALE',
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F1717217e-fe76-41d9-8427-71d70ec3a7ed_Thumb.jpeg&w=640&q=100',
        title: 'Lenovo IdeaPad 3 15IAU7 15.6"',
        description: 'Intel i3-1215U 8GB 512GB SSD - 82RK00R3RK',
        price: 1199.00,
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0197963_acer-aspire-5-a515-58p-nxkhjer002-grey_550.jpeg&w=640&q=100',
        title: 'Acer Aspire 5 A515-58P 15.6"',
        description: 'Intel i3-1315U 8GB 256GB SSD - NX.KHJER.001',
        price: 1249.00,
    },
    {
        image: 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fbefeb279-41e1-4e69-81bd-136f343116b0_Thumb.jpeg&w=640&q=100',
        title: 'Lenovo IdeaPad 1 15ALC7 15.6"',
        description: 'AMD Ryzen 5 5500U 16GB 512GB SSD - 82R400AFRK',
        price: 1189.00,
        oldPrice: 1299.00,
        badge: 'SALE',
    },
];

const App = () => {
    const [products] = useState(initialProducts);
    const [cart, setCart] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setSortOption(sortValue);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'name-asc') return a.title.localeCompare(b.title);
        if (sortOption === 'name-desc') return b.title.localeCompare(a.title);
        return 0;
    });

    const filteredProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container">
            <h1 className="header">Laptops</h1>

            <div className="controls">
                <input
                    type="text"
                    placeholder="მოზებნეთ ლეპტოპები..."
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
            </div>

            <div className="product-list">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-item">
                        <Product {...product} />
                        <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="cart">
                <h2>Cart</h2>
                {cart.length > 0 ? (
                    <>
                        <ul>
                            {cart.map((item, idx) => (
                                <li key={idx}>{item.title} - ${item.price.toFixed(2)} <button onClick={() => removeFromCart(idx)} className="remove-btn">Remove</button></li>
                            ))}
                        </ul>
                        <p>Total: ${totalCartPrice.toFixed(2)}</p>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default App;
