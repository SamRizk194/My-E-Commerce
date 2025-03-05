import { Link } from "react-router-dom";

function Card(props) {
  const { product, showButton } = props;

  return (
    <div className="card h-100 p-4 ">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        height="250px"
      />
      <div className="card-body">
        <h5 className="card-title mb-0">{product.title.substring(0, 10)}..</h5>
        <p className="lead fw-bold">{product.price}$</p>
        {showButton && (
          <Link className="btn btn-outline-dark" to={`/product/${product.id}`}>
            Buy Now
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
