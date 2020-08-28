import React from "react";
import "./ProductCard.css";

const Product = ({
  id,
  name,
  brand,
  business_unit,
  category,
  description,
  image,
  price,
  addFunc,
}) => {
  return (
    <div className="movie-card-container" id={id}>
      <img className="poster" src={image} alt="movie poster" />
      <div
        className="movie-title"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>{brand}</div>
        <div>{business_unit}</div>
      </div>
      <div className="movie-details">{description}</div>
      <div
        className="movie-title"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>{category}</div>
        <div>{price}</div>
        <button
          className="add-to"
          onClick={() =>
            addFunc({ id, name, description, image, price, units: 1 })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
