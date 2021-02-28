import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {

    return (
      <nav className="navbar navbar-expand-lg md-none navbar-light ">
        <div className="col-lg-2 col-md-12 col-sm-12 col-12 d-lg-block d-md-block">
          <Link className="navbar-brand ml-4" to="/">
            <img src="img/logo.png" alt="logo" className="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
          
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                SERVICIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                NUESTRAS SEDES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                ¿CÓMO FUNCIONA?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                FLOTAS
              </Link>
            </li>          
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                BLOGS
              </Link>
            </li>     
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
