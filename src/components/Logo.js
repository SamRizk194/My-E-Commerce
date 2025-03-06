function Logo() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <div
          className="card-img"
          style={{ height: "550px", backgroundColor: "#000" }}
          alt="background"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASSON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
