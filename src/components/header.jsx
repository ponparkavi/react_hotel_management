import { Container, Row, Col } from "react-bootstrap";
import Login from "./login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                    <a href="home.html">Home</a>
                  </li>
                  <li className="px-3">
                    <a href="about.html">About</a>
                  </li>
                  <li className="px-3">
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li className="px-3 fs-3 dropdown">
                    <a className="dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end bg-dark">
                      <li><a className="dropdown-item" href="#">Login</a></li>
                      <li><a className="dropdown-item" href="#">Signup</a></li>
                      <li><a className="dropdown-item" href="#">Help</a></li>
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