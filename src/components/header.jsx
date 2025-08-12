import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Container fluid>
          <Row className="py-3">
            <Col className="d-flex align-items-center">
              <a href="#" className="logo">
                HD
              </a>
            </Col>
            <Col>
              <nav class="navbar d-flex justify-content-end">
                <ul class="d-flex fw-bold align-items-center">
                  <li className="px-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="px-3">
                    <Link to="/ab">About</Link>
                  </li>
                  <li className="px-3">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="px-3 fs-3 dropdown">
                    <a
                      className="dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end bg-dark">
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/signup">
                          Sign Up
                        </Link>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <Link className="dropdown-item" to="/help">
                          Help
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
}
