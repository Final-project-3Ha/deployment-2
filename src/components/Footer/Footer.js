

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <h6>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </h6>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" placeholder="Join Now" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>MONUEH SHOP</h3>
              <p>
                North Lebanon <br />
                Akkar Governorate, Halba
                <br />
                Khousha <br />
                <br />
                <strong>Phone:</strong> +961 70 118 991
                <br />
                <strong>Email:</strong> hasaanFullStack@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/product-list">Products</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/login">Login</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/register">Register</a>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Shop</h4>
              <ul>
                
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Category-1</a>
                </li>
                <li>
                  <i className="bx bx-chevron-rGraphic Designight"></i>{" "}
                  <a href="#">Category-2</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Category-3</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Category-4</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p style={{ color: "#458217" }}>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links mt-3">
                <a
                  href="https://www.linkedin.com/in/hassan-hammoud-3ha/"
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>{" "}
                </a>
                <a
                  href="https://www.facebook.com/hassan.hammoud.7127?mibextid=ZbWKwL"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>{" "}
                </a>
                <a
                  href="https://instagram.com/hssn_3ha?igshid=ZWQyN2ExYTkwZQ=="
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/hassan-hammoud-3ha/"
                  className="twitter"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 d-flex justify-content-center">
        <div className="text-center">
          <div className="credits">
            <h6 style={{ color: "#458217" }}>
              Copyright &copy; MOUNTAIN BOONS
            </h6>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
