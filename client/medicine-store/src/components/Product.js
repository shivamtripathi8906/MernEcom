import "../css/Product.css";
import plus from "../asset/Plus.png";
import { Link } from "react-router-dom";

function Product({ product, handleClick }) {
  const path = "/product";
  return (
    <div className="product-container">
      <div className="img-container">
        <Link className="img-link" to={path}>
          <img src={product.image} alt="pic" />
        </Link>
      </div>
      <div className="product-info">
        <div className="proname-price">
          <Link className="proname-link link" to={path}>
            {product.name}
          </Link>
          <p className="link">{`$ ${product.price} USD`}</p>
        </div>
        <div className="protype-button">
          <button onClick={handleClick} className="link">
            {product.type[0]}
          </button>
          <button onClick={handleClick} className="link">
            {product.type[1]}
          </button>
        </div>
        <div className="addtocart-button">
          <button className="link">Add to Cart</button>
          <img src={plus} alt="plus"></img>
        </div>
      </div>
    </div>
  );
}

export default Product;
