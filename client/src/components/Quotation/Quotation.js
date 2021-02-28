import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import './quotation.css';

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onCheck = this.onCheck.bind(this);
  }

  render() {

    return (
      <div className="quotation">
        <nav className="navbar navbar-expand-lg bg-dark md-none navbar-light ">
          <div className="d-lg-block d-md-block">
            <div className="navbar-brand"></div>
          </div>
          <div className="selecttag">
            <li className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><FontAwesomeIcon icon={faMapMarker} color="rgb(179,226,1)"/></span>
              </div>
              <select className="form-control select" >
                <option>Bogotá</option>
                <option>Barranquilla</option>
                <option>Cali</option>
                <option>Medellin</option>
                <option>Chía</option>
              </select>
            </li>
          </div>
            
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-default">
                  <FontAwesomeIcon icon={faAngleDoubleDown} color="rgb(179,226,1)" size="24px"/>{' '}Descuentos
                </button>
              </li>     
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Quotation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, {  })(
  withRouter(Quotation)
);
