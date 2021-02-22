import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HorizonalStep from '../common/Step';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import './quotation.css';

import { getCars } from '../../actions/carActions';

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      loading:true
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.onCheck = this.onCheck.bind(this);
  }

  componentDidMount(){
    this.props.getCars();
  }

  render() {
    const { cars, loading } = this.props.car;
    let carItems;

    if (cars === null || loading) {
      carItems = <Spinner />;
    } else {
      if(typeof cars !=="undefined"){
        if (cars.length > 0) {
        carItems = cars.map(car => (
          <li>{car.name}</li>
        ));
      }
      }
    }

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
                  <FontAwesomeIcon icon={faAngleDoubleDown} color="rgb(179,226,1)" size="1x"/>{' '}Descuentos
                </button>
              </li>     
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="row" align="center">
            <div className="col-md-2"></div>
            <div className="col-md-8"><HorizonalStep/></div>
            <div className="col-md-2"></div>
          </div>
        </div>
        {carItems}
      </div>
    );
  }
}

Quotation.propTypes = {
  getCars: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  car: state.car,
  // errors: state.errors
});

export default connect(mapStateToProps, { getCars })(
  withRouter(Quotation)
);
