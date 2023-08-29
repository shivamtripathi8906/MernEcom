import { useState, useEffect } from "react";
import "../css/Featured.css";


function Featured() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    import('../database/products.json')
      .then(data => {
        setProducts(data.default);
      })
      .catch(error => {
        console.error('Error fetching local JSON data:', error);
      });
  }, []);

  console.log(products);
  

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
      
     
    </div>
  );
}

export default Featured;
