import React, { useEffect, useState } from "react";
import "../css/Featured.css";
import Product from "./Product";
import "../database/products.json"
function Featured() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchDate() {
  //     try {
  //       const response = await fetch('../database/products.json');
  //       const data = await response.json();
  //       setProducts(data.products);
  //     } catch (error) {
  //       console.log('Error fetching data:',error);
  //     }
  //   }

  //   fetchDate();
  // },[]);
  fetch("../database/products.json").then(response=>response.json()).then(data=>console.log(data))
  // console.log(products)
  return (
    <div className="featured-container section-padding">
      <div className="featured-title">
        <h2>Featured Products</h2>
      </div>
      <div className="product-categories">
        <button className="active">Vitamins</button>
        <button >Face Care</button>
        <button >Body Care</button>
        <button >Medical Equiment</button>
        <button >Health</button>
        <button >Personal Care</button>
        <button >Muscle Care</button>
      </div>
      <Product />
    </div>
  );
}

export default Featured;
