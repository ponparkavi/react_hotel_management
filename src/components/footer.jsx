import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import googleplay from "../assets/images/google_play.webp";
import appleStore from "../assets/images/apple_store.webp";

export default function Footer() {
  return (
    <footer>
      <hr></hr>
      <Container>
        <div className="foot-container">
          <div className="foot-text">
            <h5 className="fw-bold">HD</h5>
            <h5>
              <span className="text-primary">H</span>oli
              <span className="text-primary">D</span>ay
            </h5>
            <p className="end-text">
              Discover the most outstanding articles on all topics of life
            </p>
          </div>
          <div className="foot-text">
            <h5>Support</h5>
            <p className="end-text">
              Help Center <br></br>Safety information Cancellation options
            </p>
          </div>
          <div className="foot-text">
            <div className="footer-section">
              <h4>Social Links</h4>
              <div className="social-icons fs-3">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div className="d-flex app-store-icons">
                <img src={googleplay} alt="googlePlay" />
                <img src={appleStore} alt="appleStore" />
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="end-text">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners.2022 © HD™ Ltd. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
