import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from './Navbar';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="landing">
          <div className="landing-inner text-light">
              <div className="row">
                <div className="col-md-12 text-center landing-letter">
                  <h1 className="display-3 mb-4 mt-5">TODO EN UN SOLO LUGAR</h1>
                  <hr className="logo_line"/>
                  <p className="lead">
                    {' '}
                    Con nuestra aplicación, verifica el estado de tu vehículo, los servicios realizados y cotizaciones.
                  </p>
                  <div className="button-group">
                    <Link className="btn btn-lg mybtn" to="cotizacion"> <FontAwesomeIcon icon={faUserEdit}/>{'       '}Pedir cotizacion </Link>
                    <Link className="btn btn-lg mybtn" to="tel:+981121401"><FontAwesomeIcon icon={faMobileAlt}/>{' '}Llámanos<br/>(+51)+981121401</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* <div className="row pt-5">
          <div className="col-12 line-third-of-web-form"></div>
          <div className="col-12 line-second-of-web-form"></div>
          <div className="col-12 line-one-of-web-form"></div>
        </div> */}
        {/* <div align="center">
          <h1 className="mt-5">Mecánica sin salir de casa</h1>
          <hr/>
          <div className="row">
            <div className="col-6" align="right">
              <Link className="addresses-service-block--al-driver" to="conductor-autolab"> 
                <span className="cover"> 
                  <img className="lazy loaded" src="" data-src="https://s3.amazonaws.com/static.autolab.com.co/assets/images/conductor%402x.png" alt="" data-nsfw-filter-status="sfw" data-was-processed="true"/> 
                </span>
                <p>Llevamos tu<br/> carro al taller</p> 
              </Link>
            </div>
            <div className="col-6"></div>
          </div>
        </div> */}
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
