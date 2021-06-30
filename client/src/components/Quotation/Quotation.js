import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import Stepper from 'react-stepper-horizontal';
import ModalTemplate from '../common/Modal'

import './quotation.css';
import SelectMoto from './SelectMoto';
import SelectService from './SelectService';
import SelectData from './SelectData';
import SelectInfo from './SelectInfo';

class Quotation extends Component {
  constructor(props){
    super(props);
    this.state = {
      step : 0,
      showModal: false,
    }
  }

  showModal = () =>{
    this.setState({ showModal : true });
  }

  render() {
    return (
      <div className="quotation">
        <nav className="navbar navbar-expand-lg bg-dark navbar-light navbar-fixed-top">
          <div className="d-lg-block d-md-block">
            <Link to="/"><div className="navbar-brand"></div></Link>
          </div>
          <div className="selecttag">
            <li className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><FontAwesomeIcon icon={faMapMarker} color="rgb(179,226,1)"/></span>
              </div>
              <select className="form-control select p-auto" >
                <option>Tingo Maria</option>
              </select>
            </li>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <button className="btn btn-sm" onClick={this.showModal}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} color="rgb(179,226,1)" size="1x"/>{' '}Descuentos 
                </button>
              </li>     
            </ul>
          </div>
        </nav>

        <ModalTemplate
          show={this.state.showModal}
          hide={() => this.setState({showModal:false})}
          data={[]}
          type={1}
        />

        <div className="container">
          <div className="row" align="center">
            <div className="col-md-3"></div>
            <div className="col-md-6 mb-4">
              <Stepper 
                steps={ [
                  {title: 'ELIGE TU VEHÍCULO', onClick:()=>this.setState({step:0})}, 
                  {title: 'ELIGE TUS SERVICIOS', onClick:()=>this.setState({step:1})}, 
                  {title: "AGENDA TU CITA", onClick:()=>this.setState({step:2})}, 
                  {title: 'DATOS DE CONTACTO', onClick:()=>this.setState({step:3})}
                ] } 
                activeStep={ this.state.step } 
                activeColor="rgba(179,226,1,0.5)" 
                completeColor="rgb(179,226,1)"
                activeBorderColor="rgb(0,0,0)"
                circleFontColor="rgb(0,0,0)"
                circleFontSize={18}
                titleFontSize={13}
                size={46}
              />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        {this.state.step===0?(<SelectMoto nextclick={()=>{this.setState({step: this.state.step+1})}}/>):''}
        {this.state.step===1?(<SelectService nextclick={()=>{this.setState({step: this.state.step+1})}}/>):''}
        {this.state.step===2?(<SelectData nextclick={()=>{this.setState({step: this.state.step+1})}}/>):''}
        {this.state.step===3?(<SelectInfo/>):''}
      </div>  
    );
  }
}

export default connect(null, {})(
  withRouter(Quotation)
);
