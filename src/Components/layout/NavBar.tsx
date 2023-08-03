import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between">
        <h2 className="logo">FarmHub</h2>
        <ul className="list-group d-flex flex-row align-items-center">
          <li className="list-group-items">Home</li>
          <li className="list-group-items">Services</li>
          <li className="list-group-items">About</li>
          <li className="list-group-items">Sponsors</li>
          <Link to="/login" className="btn btn-success" id="login">
            Login
          </Link>
          <hr />
          <Link to="/login" className="btn btn-success" id="register">
            Register
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
