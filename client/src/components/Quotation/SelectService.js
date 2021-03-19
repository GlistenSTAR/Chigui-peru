import React, { Component } from "react"; 
import InputGroup from "../common/InputGroup";
import {Card, Modal} from 'react-bootstrap'
import RecommandedCarsel from './RecommandedCarsel';
import RecommandedCarsel1 from './RecommandedCarsel1';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShoppingCart, faAngleLeft,  faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class SelectService extends Component {
  constructor(props){
    super(props);
    this.state ={
      search : '',
      price : 1,
      count : 0,
      modal1 : false,
      onEngineModal : false,
      onElectronicModal : false,
      onLiquidLeakModal: false,
      onWitnessesModal: false,
      onBrakeModal: false,
      onBrakePumpModal: false,
      onTireSuspensionModal: false
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
    this.setState({ onEngineModal : false });
  }
  onEngineBack = () =>{
    this.setState({modal1:true});
    this.setState({ onEngineModal : false });
  }
  onElectronic = () => {
    this.setState({modal1:false});
    this.setState({onElectronicModal: true});
  }  
  onElectroicModalClose = () =>{
    this.setState({onElectronicModal: false});
  }
  onElectronicBack = () =>{
    this.setState({modal1:true});
    this.setState({ onElectronicModal : false });
  }
  onLiquidLeak = () =>{
    this.setState({modal1:false});
    this.setState({onLiquidLeakModal: true});
  }
  onLiquidLeakModalClose=()=>{
    this.setState({onLiquidLeakModal: false});
  }
  onLiquidLeakBack = () =>{
    this.setState({modal1:true});
    this.setState({ onLiquidLeakModal : false });
  }
  onWitnesses = () => {
    this.setState({modal1:false});
    this.setState({onWitnessesModal: true});
  }
  onWitnessesModalClose = () => {
    this.setState({onWitnessesModal: false});
  }
  onWitnessesBack = () =>{
    this.setState({modal1:true});
    this.setState({ onWitnessesModal : false });
  }
  onBrake = () => {
    this.setState({modal1:false});
    this.setState({onBrakeModal: true});
  }
  onBrakeModalClose = () => {
    this.setState({onBrakeModal: false});
  }
  onBrakeBack = () =>{
    this.setState({modal1:true});
    this.setState({ onBrakeModal : false });
  }
  onBrakePump = () => {
    this.setState({modal1:false});
    this.setState({onBrakePumpModal: true});
  }
  onBrakePumpClose = () => {
    this.setState({onBrakePumpModal: false});
  }
  onBrakePumpBack = () =>{
    this.setState({modal1:true});
    this.setState({ onBrakePumpModal : false });
  }
  onTireSuspension =() => {
    this.setState({modal1:false});
    this.setState({onTireSuspensionModal: true});
  }
  onTireSuspensionClose = () => {
    this.setState({onTireSuspensionModal: false});
  }
  onTireSuspensionBack = () =>{
    this.setState({modal1:true});
    this.setState({onTireSuspensionModal: false });
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
            <div className="row mt-2 mb-3" onClick={this.onElectronic}>
              <div className="col-md-9 col-9">
                En el sistema electrico
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3" onClick={this.onLiquidLeak}>
              <div className="col-md-9 col-9">
                Liquidos/fugas
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3" onClick={this.onWitnesses}>
              <div className="col-md-9 col-9">
                Testigos
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3" onClick={this.onBrake}>
              <div className="col-md-9 col-9">
                En los frenos 
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3" onClick={this.onBrakePump}>
              <div className="col-md-9 col-9">
                En las bombas de freno
              </div>
              <div className="col-md-3 col-3" align="right">
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            </div>
            <div className="row mt-2 mb-3" onClick={this.onTireSuspension}>
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
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onEngineBack}/>{' '}Diagnósticos En el motor</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="row mt-2 mb-3">
                <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico fallo de motor</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Aceleracion y desaceleracion</li>
                        <li>Apaga repentinamente</li>
                        <li>Sale humo</li>
                        <li>Pierde fuerza</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico encendido</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>No enciende</li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Modal.Body>
        </Modal>
        {/* onElectronic Modal */}
        <Modal
          show={this.state.onElectronicModal}
          onHide={this.onElectroicModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onElectronicBack}/>{' '}Diagnósticos En el sistema eléctrico</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="row mt-2 mb-3">
                <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico del sistema de inyeccion</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Inyectores</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico electrico</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Bombillos </li>
                        <li>Tablero </li>
                        <li>Alarma </li>
                        <li>Mensajes de falla </li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico sistema de carga</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Regulador </li>
                        <li>Bobinas </li>
                        <li>Estator </li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico de sensores</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Diagnostico de sensores </li>
                        <li>Sensores </li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Modal.Body>
        </Modal>
        {/* onLiquidLeak modal */}
        <Modal
          show={this.state.onLiquidLeakModal}
          onHide={this.onLiquidLeakModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onLiquidLeakBack}/>{' '}Diagnósticos En los liquidos / fugas</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="row mt-2 mb-3">
                <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico perdida de refrigerante</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Fuga refrigerante</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}> Diagnostico de fugas</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Fuga de aceite </li>
                        <li>Fuga de liquidos de frenos </li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico de bomba de gasolina</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Bomba de aceite </li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Modal.Body>
        </Modal>
        {/* onWitnessesModal */}
        <Modal
          show={this.state.onWitnessesModal}
          onHide={this.onWitnessesModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onWitnessesBack}/>{' '}Diagnósticos En los testigos</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="row mt-2 mb-3">
                <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico testigo de motor</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Motor</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}> Diagnostico testigo de temperatura</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Temperatura</li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico testigo de freno, abs o control de traccion</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Freno</li>
                        <li>ABS</li>
                        <li>Traccion</li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Modal.Body>
        </Modal>
        {/* onWitnessesModal */}
        <Modal
          show={this.state.onBrakeModal}
          onHide={this.onBrakeModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onBrakeBack}/>{' '}Diagnósticos En los frenos</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className="row mt-2 mb-3">
                <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico de frenado</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Frenos largos</li>
                        <li>Ruido/chillido en los frenos</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}> Diagnostico de fugas</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Fuga en liquido de frenos</li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2 mb-3">
              <div className="model-card">
                  <Card style={{width:'100%'}}>
                    <div className="row">
                      <div className="col-8">
                        <h5 align="left" style={{ textTransform :'uppercase'}}>Diagnostico testigo de freno, abs o control de traccion</h5>
                      </div>
                      <div className="col-4" style={{height:'50px'}}>
                        <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                          <span>3000$ {' '}</span>
                          <FontAwesomeIcon icon={faPlusCircle} color='green'/>
                        </h6>
                      </div>
                      <hr style={{marginTop:'-10px'}}/>
                    </div>
                    <Card.Body>
                      <Card.Text style={{fontSize:'14px', marginTop:'-15px'}}>
                        <span style={{fontStyle:'italic', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                        <li>Freno</li>
                        <li>ABS</li>
                        <li>Traccion</li>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Modal.Body>
        </Modal>
        {/* onBrakePumpModal */}
        <Modal
          show={this.state.onBrakePumpModal}
          onHide={this.onBrakePumpModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onBrakePumpBack}/>{' '}Diagnósticos En los frenos</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>
        </Modal>
        {/* onTireSuspensionModal */}
        <Modal
          show={this.state.onTireSuspensionModal}
          onHide={this.onTireSuspensionModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{background:'rgb(179,226,1)'}}>
            <Modal.Title style={{fontSize:'20px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={this.onTireSuspensionBack}/>{' '}Diagnósticos En los frenos</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>
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