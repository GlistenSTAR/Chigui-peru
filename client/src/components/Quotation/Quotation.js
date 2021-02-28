import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onCheck = this.onCheck.bind(this);
  }


  render() {

    return (
      <div className="add-quotation">
        
        {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="navbar-brand"></div>
          <ul className="navbar-nav" align="left">
            <li className="nav-item input-group">
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
          </ul>
          <div className="navbar-right nav">
            <button className="btn btn-default" align="right">asd</button>
          </div>
        </nav> */}
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
