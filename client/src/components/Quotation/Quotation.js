import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import Stepper from 'react-stepper-horizontal';

// import HorizonalStep from '../common/Step';
import SelectMoto from './SelectMoto';
import SelectService from './SelectService';

import './quotation.css';
import SelectData from './SelectData';

class Quotation extends Component {
  constructor(props){
    super(props);
    this.state = {
      step : 1  
    }
  }


  render() {
    return (
      <div className="quotation">
        <nav className="navbar navbar-expand-lg bg-dark navbar-light navbar-fixed-top">
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
            <div className="col-md-3"></div>
            <div className="col-md-6 mb-4">
              <Stepper 
                steps={ [
                  {title: 'ELIGE TU VEHÍCULO'}, 
                  {title: 'ELIGE TUS SERVICIOS'}, 
                  {title: 'AGENDA TU CITA'}, 
                  {title: 'DATOS DE CONTACTO'}
                ] } 
                activeStep={ this.state.step } 
                activeColor="rgba(179,226,1,0.5)" 
                completeColor="rgb(179,226,1)"
                activeBorderColor="rgb(0,0,0)"
                circleFontColor="rgb(0,0,0)"
                titleFontSize={16}
                size={50}
                />

              </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        {this.state.step===0?(<SelectMoto nextclick={()=>{this.setState({step: this.state.step+1})}}/>):''}
        {this.state.step===1?(<SelectService nextclick={()=>{this.setState({step: this.state.step+1})}}/>):''}
        {this.state.step===2?(<SelectData nextclick={()=>{this.setState({step: this.state.step+1})}}/>):''}
      </div>  
    );
  }
}


export default connect(null, {})(
  withRouter(Quotation)
);
