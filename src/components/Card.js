import { Link } from "react-router-dom";

function Card(props) {
  const { product } = props;

  return (
    <div className="card h-100 p-4">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-0">{product.title.substring(0, 10)}...</h5>
        <p className="lead fw-bold">{product.price}$</p>
        <div className="mt-auto">
          <Link className="btn btn-outline-dark" to={`/products/${product.id}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
