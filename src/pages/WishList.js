import React, { useContext } from "react";
import { store } from "../store/context";
import ProductCard from "../components/ProdCard";

const WishList = () => {
  const context = useContext(store);

  return (
    <>
      <div
        style={{
          marginTop: "80px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        {context.state.cart.map((item) => (
          <ProductCard
            key={item.id}
            id={item._id}
            name={item.name}
            brand={item.brand}
            business_unit={item.business_unit}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default WishList;
