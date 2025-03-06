import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* عمود حقوق الملكية */}
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p>&copy; 2025 LA COLLECTION. All Rights Reserved.</p>
          </div>

          {/* عمود روابط وسائل التواصل الاجتماعي */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <i className="fa fa-facebook" style={{ fontSize: "24px" }}></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
