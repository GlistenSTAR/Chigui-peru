import React, { Component } from "react"; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalTemplate from '../common/Modal'
import { getServices } from '../../actions/seviceActions';

import ReviewCarsel from './ReviewCarsel';
import RecommandedCarsel from './RecommandedCarsel';
import HighlightCarsel from './HighlightCarsel';
import ElectronicCarsel from './ElectronicCarsel';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class SelectService extends Component {
  constructor(props){
    super(props);
    this.state ={
      search : '',
      count : 0
    }
  }

  componentDidMount(){
    this.props.getServices();
  }
  onChange = (e) =>{
    console.log(e); 
  }
  total_diagnose = () =>{
    this.setState({ total_diagnose_modal : true });
  }
  total_diagnose_modal_close = () =>{
    this.setState({total_diagnose_modal:false});
  }

  render() {
    const {serivces} = this.props;
      
    return (
     <div className="services container" align="center">
       <div className="row" align="center">
        {/* <InputGroup
          name="search"
          icon="fa fa-search"
          onChange={this.onChange}
          value={this.state.search}
          placeholder="Búsqueda..."
        /> */}
        <div className="horizal-card row"  onClick={this.total_diagnose}>
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="right" >
            <img className="img-rounded" alt="" src={require('../../img/icons/diagnostico.png')} style={{visibility: 'visible'}} />
          </div>
          <div className="col-md-6 col-sm-6 col-6 text text-default mt-auto mb-auto" >
            <span >Diagnosticar una falla</span><br/>
            <small style={{color:'grey'}}>¿No sabes la falla? Descubrámosla</small>
          </div>
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="center" >
              <button className="btn btn-sm" >Aqui!</button>
          </div>
        </div>

         {/* Diagnosticar una falla modal */}
         <ModalTemplate
            show={this.state.total_diagnose_modal}
            hide={this.total_diagnose_modal_close}
            data={serivces.services}
            type={1}
         />
        
        
        <div className="recommand mt-4" align="left">
          <h6 style={{color:'grey'}}>DESTACADOS</h6><hr/>
          <HighlightCarsel />
          
          <div className="review mt-3">
            <h6 style={{color:'grey'}}>REVISIONES</h6><hr/>
            <ReviewCarsel />
          </div>
          
          <div className="review mt-3">
            <h6 style={{color:'grey'}}>SERVICIOS EXPRESS</h6><hr/>
            <RecommandedCarsel />
          </div>
        </div>

        <div className="mechine mt-3" align="center">
          <div className="recommand clone" align="left">
            <h6 style={{color:'grey'}}>ELECTRICIDAD</h6><hr/>
            <ElectronicCarsel />
          </div>
          <h6 align="left" style={{color:'grey'}}>MECANICA</h6><hr/>
          <div className="row" style={{backgroundColor:'#F3F3F3',borderRadius:'10px'}}>
            <div className="col-md-4 col-6">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Pastilla de frenos</div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/cambio de bateria.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Cambio de Bateria</div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Mantenimiento General</div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="item row" style={{borderRadius:'28px'}}>
                <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                <div className="col-7 mt-2" align="left">Mantenimiento premiun</div>
              </div>
            </div>
          </div>
        </div>

          <div style={{width:'100%'}} align="cener">
            <div className="row mt-4 mb-5" style={{width:'100%', paddingLeft:'auto', paddingRight:'auto'}} align="center">
              <button className="btn form-control" style={{background:'rgb(179,226,1)', color:'black'}} onClick={this.props.nextclick}>RESERVAR CITA</button>
            </div>
          </div>
          {localStorage.getItem("price")?(
            <div className="bucket" align="left">
              <div className="bucketIcon pl-4 pr-5 pt-2" style={{color:'white'}}>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" style={{float:'left'}}/>
                <h5 align="center" className="mt-1 pl-5" style={{ float:'left'}}>Ver Motocicleta</h5>
                <h4 align="right">S/.{' '}{localStorage.getItem("price")}</h4>
              </div>
            </div>
          ):''}
       </div>
     </div>
    );
  }
}

SelectService.propTypes = {
  getServices: PropTypes.func.isRequired,
  services: PropTypes.object
};

const mapStateToProps = state => ({
  serivces: state.serivce,
});

export default connect(mapStateToProps, { getServices })(
  SelectService
);