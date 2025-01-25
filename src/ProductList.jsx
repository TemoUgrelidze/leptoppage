import "react";
import Product from "./Product";

const ProductList = ({
                         
                         // eslint-disable-next-line react/prop-types
                         filteredProducts,
                         // eslint-disable-next-line react/prop-types
                         addToCart,
                         // eslint-disable-next-line react/prop-types
                         handleSearchChange,
                         // eslint-disable-next-line react/prop-types
                         handleSortChange,
                         // eslint-disable-next-line react/prop-types
                         searchQuery,
                         // eslint-disable-next-line react/prop-types
                         sortOption,
                     }) => {
    return (
        <div className="product-list-container">
            {/* Search Input */}
            <div className="controls">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                    placeholder="Search products..."
                />
                {/* Sort Dropdown */}
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="sort-dropdown"
                >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>

            {/* Product List */}
            <div className="product-list">
                {/* eslint-disable-next-line react/prop-types */}
                {filteredProducts.length > 0 ? (
                    // eslint-disable-next-line react/prop-types
                    filteredProducts.map((product, index) => (
                        <div key={index} className="product-item">
                            <Product {...product} />
                            <button
                                onClick={() => addToCart(product)}
                                className="add-to-cart-btn"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No products found</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
