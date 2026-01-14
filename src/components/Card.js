import { Link } from "react-router-dom";
import "./css/card.css";

function Card({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 20)}...</h3>
      <p className="price">{product.price}$</p>
      <Link className="btn-buy" to={`/products/${product.id}`}>
        Buy Now
      </Link>
    </div>
  );
}

export default Card;
