import { useState, useEffect } from "react";
import "../css/Featured.css";
import Product from "./Product";

function Featured() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("Vitamins");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    import("../database/products.json")
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching local JSON data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.type[0] === type || product.type[1] === type
    );
    setFiltered(filteredProducts);
  }, [type, products]);

  const handleClick = (event) => {
    const buttonText = event.target.textContent;
    setType(buttonText);
  };

  return (
    <div className="featured-container section-padding">
      <div className="featured-title">
        <h2>Featured Products</h2>
      </div>
      <div className="product-categories">
        <button
          onClick={handleClick}
          className={type === "Vitamins" ? "active" : ""}
        >
          Vitamins
        </button>
        <button
          onClick={handleClick}
          className={type === "Face Care" ? "active" : ""}
        >
          Face Care
        </button>
        <button
          onClick={handleClick}
          className={type === "Body Care" ? "active" : ""}
        >
          Body Care
        </button>
        <button
          onClick={handleClick}
          className={type === "Eye Care" ? "active" : ""}
        >
          Eye Care
        </button>
        <button
          onClick={handleClick}
          className={type === "Health" ? "active" : ""}
        >
          Health
        </button>
        <button
          onClick={handleClick}
          className={type === "Personal Care" ? "active" : ""}
        >
          Personal Care
        </button>
        <button
          onClick={handleClick}
          className={type === "Muscle Care" ? "active" : ""}
        >
          Muscle Care
        </button>
      </div>
      <div className="product-list">
        {filtered.map((product) => (
          <Product handleClick={handleClick} key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
