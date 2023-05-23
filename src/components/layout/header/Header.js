
import { NavLink } from "react-router-dom";
import HeaderLogic from "./HeaderLogic";
const Header = () => {
  const {isLoggedIn, userName} = HeaderLogic()
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL+"/img/logo.png"} className="logo" alt=""/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item mr-3">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink className="nav-link" to="/properties">Properties</NavLink>
              </li>
            </ul>
            {isLoggedIn &&<ul className="navbar-nav ml-auto" >
              <li className="nav-item mr-3">
                <NavLink className="nav-link" to="/profile">
                  <i className="fas fa-user"></i> {userName}</NavLink>
              </li>
            </ul>}

            {!isLoggedIn &&<ul className="navbar-nav ml-auto" >
              <li className="nav-item mr-3">
                <NavLink className="nav-link" to="/register">
                  <i className="fas fa-user-plus"></i> Register</NavLink>
              </li>
              <li className="nav-item mr-3">
                <NavLink className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login</NavLink>
              </li>
            </ul>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
