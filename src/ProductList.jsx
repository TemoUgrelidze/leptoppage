import "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({
                         filteredProducts,
                         addToCart,
                         handleSearchChange,
                         handleSortChange,
                         searchQuery,
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
            </div>

            {/* Price option */}
            <div className="controls">
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="sort-dropdown"
                    >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
            </select>
        </div>


    {/* Product List */}
            <div className="product-list">
                {filteredProducts.length > 0 ? (
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

// PropTypes
ProductList.propTypes = {
    filteredProducts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
            ).isRequired,
            addToCart: PropTypes.func.isRequired,
            handleSearchChange: PropTypes.func.isRequired,
            handleSortChange: PropTypes.func.isRequired,
            searchQuery: PropTypes.string.isRequired,
            sortOption: PropTypes.string.isRequired,
        };

            export default ProductList;