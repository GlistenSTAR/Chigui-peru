import React, { Component } from "react"; 
import InputGroup from "../common/InputGroup";
import {Card, Modal} from 'react-bootstrap'
import RecommandedCarsel from './RecommandedCarsel';
import RecommandedCarsel1 from './RecommandedCarsel1';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShoppingCart, faLongArrowAltLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class SelectService extends Component {
  constructor(props){
    super(props);
    this.state ={
      search : '',
      price : 1,
      count : 0,
      modal1 : false,
      onEngineModal : false
    }
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
  onEngine = () => {
    this.setState({modal1:false});
    this.setState({ onEngineModal : true });
  }
  onEngineModalClose = () =>{
    this.setState({modal1:true});
    this.setState({ onEngineModal : false });
  }

  render() {
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
            <img className="img-rounded" alt="" src={require('../../img/icons/diagnostico.png')} style={{visibility: 'visible', border: '2px solid rgb(179, 226, 1)', borderRadius: '50%'}} />
          </div>
          <div className="col-md-6 col-sm-6 col-6 text text-default mt-auto mb-auto" >
            <span >Diagnosticar una falla</span><br/>
            <small >¿No sabes la falla? Descubrámosla</small>
          </div>
          <div className="col-md-3 col-sm-3 col-3 mt-auto mb-auto" align="center" >
              <button className="btn btn-sm" style={{backgroundColor:'rgb(179,226,1)'}} >Aqui!</button>
          </div>
        </div>

         {/* Diagnosticar una falla modal */}
         <Modal
            show={this.state.modal1}
            onHide={this.handleClose1}
            backdrop="static"
            keyboard={false}
         > 
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}>¿Donde se presentan las fallas?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row mt-2 mb-3" onClick={this.onEngine}>
              <div className="col-md-9 col-9">
                En el motor
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-md-9 col-9">
                En el sistema electrico
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-md-9 col-9">
                Liquidos/fugas
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-md-9 col-9">
                Testigos
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-md-9 col-9">
                En los frenos 
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-md-9 col-9">
                En las bombas de freno
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-md-9 col-9">
                En las llantas y suspension
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer align="center">
            <button className="btn btn-default">¿No encuentras las fallas que necesitas?</button>
          </Modal.Footer>
        </Modal>

        {/* engine modal area */}
        <Modal
          show={this.state.onEngineModal}
          onHide={this.onEngineModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft}/>{' '}Diagnósticos En el motor</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="row mt-2 mb-3" onClick={this.onEngine}>
                <div className="col-md-9 col-9">
                  Diagnósticos En el motor
                </div>
                <div className="col-md-3 col-3" align="right">
                  <FontAwesomeIcon icon={faAngleRight}/>
                </div>
              </div>
              <div className="row mt-2 mb-3">
                <div className="col-md-9 col-9">
                  En el sistema electrico
                </div>
                <div className="col-md-3 col-3" align="right">
                  <FontAwesomeIcon icon={faAngleRight}/>
                </div>
              </div>
              <div className="row mt-2 mb-3">
                <div className="col-md-9 col-9">
                  Liquidos/fugas
                </div>
                <div className="col-md-3 col-3" align="right">
                  <FontAwesomeIcon icon={faAngleRight}/>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer align="center">
              <button className="btn btn-default">¿No encuentras las fallas que necesitas?</button>
            </Modal.Footer>
        </Modal>

        <div className="recommand mt-4" align="left">
          <h6>DESTACADOS</h6><hr/>
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
          
          <div className="review mt-3">
            <h6>REVISIONES</h6><hr/>
            <RecommandedCarsel/>
          </div>
          
          <div className="review mt-3">
            <h6>SERVICIOS EXPRESS</h6><hr/>
            <RecommandedCarsel1/>
          </div>
        </div>
        <div className="mechine mt-3" align="center">
            <h6 align="left">MECANICA</h6><hr/>
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

          <div className="recommand mt-4 clone" align="left">
            <h6>ELECTRICIDAD</h6><hr/>
            <div className = "row" style={{background:'#F3F3F3', borderRadius:'10px', padding:'10px'}}>
              <div className="col-md-4 col-4" align="center">
                <Card>
                <Card.Img variant="top" src={require('../../img/icons/escaner.png')} />
                <Card.Body>
                  <Card.Text>
                  CARGA DE BATERIA
                  </Card.Text>
                </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-4" align="center">
                <Card align="center">
                  <Card.Img variant="top" src={require('../../img/icons/revision_por_kilometraje.png')}/>
                <Card.Body>
                  <Card.Text>
                  SOLO BATERIA
                  </Card.Text>
                </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-4" align="center">
                <Card>
                <Card.Img variant="top" src={require('../../img/icons/cambio_de_aceite.png')} />
                <Card.Body>
                  <Card.Text style={{fontSize:'11px'}}>
                  CARGA DE BATERIA CON VEHICULO
                  </Card.Text>
                </Card.Body>
                </Card>
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
                <h6 align="center" className="mt-1 pl-5" style={{ float:'left'}}>Ver la motocicleta</h6>
                <h4 align="right">{this.state.price}</h4>
              </div>
            </div>
          ):''}
       </div>
     </div>
    );
  }
}

export default SelectService;