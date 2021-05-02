import React, { Component } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal} from 'react-bootstrap'
import { faClock, faStickyNote, faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap'
import ListComponent from '../common/List';

class MileageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false
    };
  }
  render() {
    let {data, show, hide } = this.props;
    return (
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Servicio de Escáner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6" style={{verticalAlign:'center'}}>
              <div className="row">
                <div className="col-md-2 circle_icon" >
                  <FontAwesomeIcon icon={faClock} style={{color:'rgb(179,226,1)', fontSize:'35px'}}/>
                </div>
                <div className="col-md-9" style={{fontSize:'14px'}}>
                  Tiempo estimado<br/>
                  <span style={{fontSize:'12px', fontFamily:'serif'}}>{data.time} min</span>
                </div>
              </div>
            </div>
            <div className="col-md-6" align="right">
            <div className="row">
                <div className="col-md-6 circle_icon" align="right">
                  <FontAwesomeIcon icon={faStickyNote} style={{color:'rgb(179,226,1)', fontSize:'35px', textAlign:'right' }}/>
                </div>
                <div className="col-md-5" style={{fontSize:'14px'}} align="left">
                Garantía<br/>
                  <span style={{fontSize:'12px', fontFamily:'serif', textAlign:'left'}}>6 mes(es) o 10000 Km</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row  m-2">
              <div className="col-8" style={{ marginTop:'auto', marginBottom:'auto'}}>
                <h5 align="left" style={{ textTransform :'uppercase', fontSize:'14px'}}>Servicio de Escaner</h5>
              </div>  
              <div className="col-4" style={{height:'50px'}}>
                <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                  <span>{'S/.'}{data.price}</span>
                  <FontAwesomeIcon icon={this.state.flag?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                    onClick={
                      ()=>{
                        this.props.onClick(data.price, "Revisión por Kilometraje", data.time);
                        this.setState({flag: !this.state.flag})
                      }}
                  />
                </h6>
              </div>
              <hr/>
            </div>
            <Card.Body>
              <Card.Text style={{marginTop:'-15px'}}>
                <span style={{fontStyle:'italic', fontSize:'12px', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
              </Card.Text>
              <ListComponent data={typeof data.data!=="undefined"?data.data[0].detail:null}/>
            </Card.Body>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MileageComponent;