import React from 'react';
import './Card.css';

const Card = ({ product }) => {
    return (
        <div className="product-card">
            <div className="image-container">
                {/* Используем изображение из пропсов */}
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <div className="product-name">{product.name}</div>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart">View Product</button>
            </div>
        </div>
    );
};

export default Card