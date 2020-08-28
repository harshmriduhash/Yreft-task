import React, { useContext } from "react";
import { store } from "../store/context";
// import ProductCard from "../components/ProdCard";
import SimpleCard from "../components/AvlCard";
import "../components/AllProducts.css";

const AvailableProducts = () => {
  const context = useContext(store);
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <div className="elements">
          {context.state.data.map((item) => {
            console.log("Data Rendering from state");
            if (item.avlble === "1") {
              console.log("Availabe Product");
              return (
                <SimpleCard
                  key={item._id}
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  business_unit={item.business_unit}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              );
            } else {
              console.log("Unavilabe Product");
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default AvailableProducts;
