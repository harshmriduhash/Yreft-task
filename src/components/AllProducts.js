import React, { useContext, useState, useEffect } from "react";
import "./AllProducts.css";

import ProductCard from "./ProdCard";
import { store } from "../store/context";

const MainLogic = () => {
  const context = useContext(store);
  const { dispatch } = context;

  const [datacsv, setDatacsv] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log("Context", context);
    setDatacsv(context.state.data.slice(page * 10, (page + 1) * 10));
  }, [context, page]);

  const handleAddFunc = (product) => {
    dispatch({ type: "CART_ADD", payload: product });
  };

  const handlePrevious = () => {
    setPage(page - 1);
    setDatacsv(context.state.data.slice(page * 10, (page + 1) * 10));
  };

  const handleNext = () => {
    setPage(page + 1);
    setDatacsv(context.state.data.slice(page * 10, (page + 1) * 10));
  };


  return (
    <div style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="elements">
          {datacsv.length > 0 &&
            datacsv.map((item) => (
              <ProductCard key={item.id} {...item} addFunc={handleAddFunc} />
            ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90vw",
          margin: "1%",
        }}
      >
        {page > 0 && <button className="btn prev-btn" onClick={handlePrevious}>Previous</button>}
        {page < context.state.data.length && (
          <button className="btn next-btn" onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MainLogic;
