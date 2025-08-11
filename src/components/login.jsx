import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './login.css'

export default function Login() {
  return (
    <div className="bod m-0">
      <div className="login-container">
        <h2>Login</h2>
        <div className="social-btn">
          <button className="btn bg-dark text-white  button_go-fb">
            <FontAwesomeIcon icon={faGoogle} />
            Continue with Google
          </button>
          <button className="button_go-fb btn btn-dark">
            <FontAwesomeIcon icon={faFacebook} />
            Continue with Facebook
          </button>
        </div>
        <div className="separator">OR</div>
        <form>
          <label htmlFor="email" className="d-flex align-items-right fw-semibold">Email</label>
          <input type="email" className="iput bg-dark text-white" required />
          <label htmlFor="password" className="d-flex align-items-right fw-semibold">Password</label>
          <input type="password" className="iput bg-dark text-white" required />
          <button className="login-btn p-2 btn-primary text-white" type="submit">Continue</button>
        </form>
        <div className="bottom-links fs-6">
          New user? <a href="signup.html" className="text-bottom">Create an account</a><br />
          <a href="#" className="text-white text-bottom">Forget Password?</a>
        </div>
      </div>
    </div>
  );
}