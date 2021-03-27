import React, { Component } from "react"; 
import InputGroup from "../common/InputGroup";
import PropTypes from 'prop-types';
import {Card, Modal} from 'react-bootstrap'
import ReviewCarsel from './ReviewCarsel';
import { connect } from 'react-redux';
import RecommandedCarsel from './RecommandedCarsel';
import ModalTemplate from '../common/Modal';
import { getServices } from '../../actions/seviceActions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShoppingCart, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class SelectService extends Component {
  constructor(props){
    super(props);
    this.state ={
      search : '',
      price : 1,
      count : 0
    }
  }

  componentDidMount(){
    this.props.getServices();
  }
  onChange = (e) =>{
    console.log(e); 
  }
  handleShow1 = () =>{
    this.setState({ modal1 : true });
  }
  handleClose1 = () =>{
    this.setState({modal1:false});
  }
  onEngineModalClose = () =>{
    this.setState({ onEngineModal : false });
  }
  onEngineBack = () =>{
    this.setState({modal1:true});
    this.setState({ onEngineModal : false });
  }
  onElectroicModalClose = () =>{
    this.setState({onElectronicModal: false});
  }
  onElectronicBack = () =>{
    this.setState({modal1:true});
    this.setState({ onElectronicModal : false });
  }
  onLiquidLeakModalClose=()=>{
    this.setState({onLiquidLeakModal: false});
  }
  onLiquidLeakBack = () =>{
    this.setState({modal1:true});
    this.setState({ onLiquidLeakModal : false });
  }
  onWitnessesModalClose = () => {
    this.setState({onWitnessesModal: false});
  }
  onWitnessesBack = () =>{
    this.setState({modal1:true});
    this.setState({ onWitnessesModal : false });
  }
  onBrakeModalClose = () => {
    this.setState({onBrakeModal: false});
  }
  onBrakeBack = () =>{
    this.setState({modal1:true});
    this.setState({ onBrakeModal : false });
  }
  onBrakePumpClose = () => {
    this.setState({onBrakePumpModal: false});
  }
  onBrakePumpBack = () =>{
    this.setState({modal1:true});
    this.setState({ onBrakePumpModal : false });
  }
  onTireSuspensionClose = () => {
    this.setState({onTireSuspensionModal: false});
  }
  onTireSuspensionBack = () =>{
    this.setState({modal1:true});
    this.setState({onTireSuspensionModal: false });
  }

  render() {
    const {serivces} = this.props;
    let TotalServices, subContent;
    if(serivces.services.length > 0){
      TotalServices = serivces.services.map((item, index)=>{
        return(
          <div className="row mt-2 mb-3" onClick={()=>{this.setState(item.clickEventData, ...this.state)}} key={index}>
            <div className="col-md-9 col-9">
              {item.serviceName}
            </div>
            <div className="col-md-3 col-3" align="right">
              <FontAwesomeIcon icon={faAngleRight}/>
            </div>
          </div>
        );
      });
      // subContent = serivces.services.map((item1, index)=>(
      //   <ModalTemplate
      //     headerContent = {item1.serviceName}
      //     onEngineModal = { this.state.onEngineModal }
      //     onEngineModalClose = { ()=>{this.setState(item1.onEngineModalClose, ...this.state)} }
      //     onEngineBack = {this.onEngineBack}
      //     key={index}
      //       data = {[
      //         {
      //           smallHeader : 'Diagnostico fallo de motor',
      //           price : 3000,
      //           miniServices : ['Aceleracion y desaceleracion','Apaga repentinamente', 'Sale humo', 'Pierde fuerza']
      //         },
      //         {
      //           smallHeader:'Diagnostico encendido',
      //           price : 2000,
      //           miniServices : ['No enciende']
      //         }
      //     ]}
      //   />
      // ));
    }

    return (
     <div className="services container" align="center">
       <div className="row" align="center">
        <InputGroup
          name="search"
          icon="fa fa-search"
          onChange={this.onChange}
          value={this.state.search}
          placeholder="Búsqueda..."
        />

        <div className="horizal-card row"  onClick={this.handleShow1}>
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
         {/* <Modal
            show={this.state.modal1}
            onHide={this.handleClose1}
            backdrop="static"
            keyboard={false}
         > 
          <Modal.Header closeButton style={{background:'rgb(179,226,1)', textTransform :'uppercase'}}>
            <Modal.Title style={{fontSize:'18px'}}>¿Donde se presentan las fallas?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {TotalServices}
          </Modal.Body>
          <Modal.Footer align="center">
            <button className="btn btn-default">¿No encuentras las fallas que necesitas?</button>
          </Modal.Footer>
        </Modal> */}

        {/* {subContent} */}
{/* 
        <ModalTemplate
          headerContent = "Diagnósticos En el motor"
          onEngineModal = { this.state.onEngineModal }
          onEngineModalClose = { this.onEngineModalClose }
          onEngineBack = {this.onEngineBack}
            data = {[
              {
                smallHeader : 'Diagnostico fallo de motor',
                price : 3000,
                miniServices : ['Aceleracion y desaceleracion','Apaga repentinamente', 'Sale humo', 'Pierde fuerza']
              },
              {
                smallHeader:'Diagnostico encendido',
                price : 2000,
                miniServices : ['No enciende']
              }
          ]}
        /> */}
        {/* onElectronic Modal */}
        {/* <ModalTemplate
          headerContent = "Diagnósticos En el sistema eléctrico"
          onEngineModal = { this.state.onElectronicModal }
          onEngineModalClose = { this.onElectroicModalClose }
          onEngineBack = {this.onElectronicBack}
          data = {[
            {
              smallHeader : 'Diagnostico del sistema de inyeccion',
              price : 3000,
              miniServices : ['Inyectores']
            },
            {
              smallHeader:'Diagnostico electrico',
              price : 2000,
              miniServices : ['Bombillos', 'Tablero', 'Alarma', 'Mensajes de falla']
            },
            {
              smallHeader:'Diagnostico sistema de carga',
              price : 1000,
              miniServices : ['Regulador', 'Bobinas', 'Estator']
            },
            {
              smallHeader:'Diagnostico de sensores',
              price : 1000,
              miniServices : ['Diagnostico de sensores', 'Sensores']
            }
          ]}
        /> */}
        {/* onLiquidLeak modal */}
        {/* <ModalTemplate
          headerContent = "Diagnósticos En los liquidos/fugas"
          onEngineModal = { this.state.onLiquidLeakModal }
          onEngineModalClose = { this.onLiquidLeakModalClose }
          onEngineBack = {this.onLiquidLeakBack}
          data = {[
            {
              smallHeader : 'Diagnostico perdida de refrigerante',
              price : 2800,
              miniServices : ['Fuga refrigerante']
            },
            {
              smallHeader:'Diagnostico de fugas',
              price : 1200,
              miniServices : ['Fuga de aceite', 'Fuga de liquidos de frenos']
            },
            {
              smallHeader:'Diagnostico de bomba de gasolina',
              price : 1200,
              miniServices : ['Bomba de aceite']
            }
          ]}
        /> */}
        {/* onWitnessesModal */}
        {/* <ModalTemplate
          headerContent = "Diagnósticos En los testigos"
          onEngineModal = { this.state.onWitnessesModal }
          onEngineModalClose = { this.onWitnessesModalClose }
          onEngineBack = {this.onWitnessesBack}
          data = {[
            {
              smallHeader : 'Diagnostico testigo de motor',
              price : 1200,
              miniServices : ['Motor']
            },
            {
              smallHeader:'Diagnostico testigo de temperatura',
              price : 1200,
              miniServices : ['Temperatura']
            },
            {
              smallHeader:'Diagnostico testigo de freno, abs o control de traccion',
              price : 1200,
              miniServices : ['Freno', 'ABS', 'Traccion']
            }
          ]}
        /> */}
        {/* onWitnessesModal */}
        {/* <ModalTemplate
          headerContent = "Diagnósticos En los frenos"
          onEngineModal = { this.state.onBrakeModal }
          onEngineModalClose = { this.onBrakeModalClose }
          onEngineBack = {this.onBrakeBack}
          data = {[
            {
              smallHeader : 'Diagnostico de frenado',
              price : 1200,
              miniServices : ['Frenos largos', 'Ruido/chillido en los frenos']
            },
            {
              smallHeader:'Diagnostico de fugas',
              price : 1200,
              miniServices : ['Fuga en liquido de frenos']
            }
          ]}
        /> */}
        {/* onBrakePumpModal */}
        {/* <Modal
          show={this.state.onBrakePumpModal}
          onHide={this.onBrakePumpModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)', textTransform :'uppercase'}}>
            <Modal.Title style={{fontSize:'18px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onBrakePumpBack}/>{' '}Diagnósticos En los frenos</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>
        </Modal> */}
        {/* onTireSuspensionModal */}
        {/* <Modal
          show={this.state.onTireSuspensionModal}
          onHide={this.onTireSuspensionModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)', textTransform :'uppercase'}}>
            <Modal.Title style={{fontSize:'18px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onTireSuspensionBack}/>{' '}Diagnósticos En los frenos</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>
        </Modal> */}
        
        <div className="recommand mt-4" align="left">
          <h6 style={{color:'grey'}}>DESTACADOS</h6><hr/>
          <div className = "row" style={{background:'#F3F3F3', borderRadius:'10px', padding:'10px'}}>
            <div className="col-md-4 col-4" align="center">
              <Card>
              <Card.Img variant="top" src={require('../../img/icons/escaner.png')} />
              <Card.Body>
                <Card.Text>
                  Servicio de escáner
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
           
            <div className="col-md-4 col-4" align="center">
              <Card align="center">
                <Card.Img variant="top" src={require('../../img/icons/revision_por_kilometraje.png')}/>
              <Card.Body>
                <Card.Text>
                  Revisión por Kilometraje
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 col-4" align="center">
              <Card>
              <Card.Img variant="top" src={require('../../img/icons/cambio_de_aceite.png')} />
              <Card.Body>
                <Card.Text>
                  Cambio de aceite
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
          </div>
          
          {/* <div className="review mt-3">
            <h5>REVISIONES</h5><hr/>
            <ReviewCarsel/>
          </div>
          
          <div className="review mt-3">
            <h5>SERVICIOS EXPRESS</h5><hr/>
            <RecommandedCarsel/>
          </div> */}
        </div>
        <div className="mechine mt-3" align="center">
          <div className="recommand clone" align="left">
            <h6 style={{color:'grey'}}>ELECTRICIDAD</h6><hr/>
            <div className = "row" style={{background:'#F3F3F3', borderRadius:'10px', padding:'10px'}}>
              <div className="col-md-4 col-4" align="center">
                <Card>
                <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
                <Card.Body>
                  <Card.Text>
                  Carga de Bateria
                  </Card.Text>
                </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-4" align="center">
                <Card align="center">
                  <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')}/>
                <Card.Body>
                  <Card.Text style={{marginTop:'auto',marginBottom:'auto'}} className="oneRow">
                  Solo Bateria
                  </Card.Text>
                </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-4" align="center">
                <Card>
                <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
                <Card.Body>
                  <Card.Text className="threeRow">
                  Carga de Bateria con Vehiculo
                  </Card.Text>
                </Card.Body>
                </Card>
              </div>
            </div>
          </div>
            <h5 align="left">MECANICA</h5><hr/>
            <div className="row" style={{backgroundColor:'#F3F3F3',borderRadius:'10px', fontSize:'13px'}}>
              <div className="col-6 col-md-4">
                <div className="item row" style={{borderRadius:'20px'}}>
                  <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                  <div className="col-7 mt-2" align="left" style={{fontSize:'14px'}}>Pastilla de frenos</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="item row" style={{borderRadius:'20px'}}>
                  <div className="col-5"><img src={require('../../img/icons/cambio_bateria.png')} alt="icon"/></div>
                  <div className="col-7 mt-2" align="left">Cambio de Bateria</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="item row" style={{borderRadius:'20px'}}>
                  <div className="col-5"><img src={require('../../img/icons/frenos.png')} alt="icon"/></div>
                  <div className="col-7 mt-2" align="left">Mantenimiento General</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="item row" style={{borderRadius:'20px'}}>
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
          {this.state.price!==0?(
            <div className="bucket" align="left">
              <div className="bucketIcon pl-4 pr-5 pt-2" style={{color:'white'}}>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" style={{float:'left', marginRight:'35px'}}/>
                <h5 align="center" className="mt-1 pl-5" style={{ float:'left'}}>Ver la motocicleta</h5>
                <h4 align="right">{this.state.price}</h4>
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