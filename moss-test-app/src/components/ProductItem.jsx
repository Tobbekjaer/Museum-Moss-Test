import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductItem({ product }) {
    const {
        id,
        slug,
        title: { rendered: title },
        acf: { description, price, photographer, written_by },
        image1Url,
        image2Url,
    } = product;

    return (
        <div className="product-item">
            <h3>{title}</h3>

            {/* Conditionally render images if available */}
            {image1Url && <img src={image1Url} alt={`${title} - Image 1`} className="product-image" />}
            {image2Url && <img src={image2Url} alt={`${title} - Image 2`} className="product-image" />}
            
            {description && <p>{description}</p>}
            {price && <p className="product-price">{price}</p>}

            <div className="product-details">
                {photographer && <p><strong>Fotograf:</strong> {photographer}</p>}
                {written_by && <p><strong>Skrevet af:</strong> {written_by}</p>}
            </div>

            <NavLink to={`/butik/produkter/${id}`} className="product-link">
                Læs mere
            </NavLink>
        </div>
    );
}
