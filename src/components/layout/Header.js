import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <img src="img/logo.png" className="logo" alt=""/>
      </a>
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

        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-3">
            <NavLink className="nav-link" to="/register">
              <i className="fas fa-user-plus"></i> Register</NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink className="nav-link" to="/login">
              <i className="fas fa-sign-in-alt"></i> Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header
