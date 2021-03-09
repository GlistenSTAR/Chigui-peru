import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

import HorizonalStep from '../common/Step';
import SelectMoto from './SelectMoto';
import SelectService from './SelectService';

import './quotation.css';

class Quotation extends Component {
  constructor(props){
    super(props);
    this.state = {
      step:0
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
            <div className="col-md-2"></div>
            <div className="col-md-8"><HorizonalStep step={this.state.step}/></div>
            <div className="col-md-2"></div>
          </div>
        </div>
        {this.state.step===0?(<SelectMoto nextclick={()=>{this.setState({step: 1})}}/>):''}
        {this.state.step===1?(<SelectService/>):''}
        {/* {this.state.step==1?(<SelectMoto nextclick={()=>{this.setState({step: 1})}}/>):''} */}
      </div>  
    );
  }
}


export default connect(null, {})(
  withRouter(Quotation)
);
