import 'react';
import PropTypes from 'prop-types';

const Product = ({ image, title, description, price, oldPrice, badge }) => {
    return (
        <div className="product-card">
            {badge && <span className="badge">{badge}</span>}
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">
                <span className="current-price">{price}ლ</span>
                {oldPrice && <span className="old-price">{oldPrice}ლ</span>}
            </p>
        </div>
    );
};

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    badge: PropTypes.string,
};

export default Product;
