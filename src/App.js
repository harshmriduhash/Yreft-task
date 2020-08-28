import React, { useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import { store, StateProvider } from "./store/context";
import * as d3 from "d3";
import data from "./data.csv";
import Footer from "./components/Footer";

function Wrapper() {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  );
}

function App() {
  const context = useContext(store);

  const { dispatch } = context;

  useEffect(() => {
    console.log("Type : ", typeof dispatch);
    d3.csv(data)
      .then((data) => {
        dispatch({ type: "ADD_DATA", payload: data });
      })
      .catch(function (err) {
        throw err;
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default Wrapper;
