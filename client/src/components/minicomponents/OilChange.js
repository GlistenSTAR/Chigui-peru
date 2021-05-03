import React, { Component } from "react"; 
import axios from 'axios'
import { Modal} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faPlusCircle, faCheckCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';


class OilChange extends Component {
  constructor(props){
    super(props);
    this.state={
      oil:[],
      price:21, 
      time:0,
      type_referr:''
    }
  }
  componentDidMount(){
    axios
      .get("/api/oils")
      .then(response => this.setState({oil : response.data}));
  }
  render() {
    if(this.state.oil.length>0){

    }
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton> </Modal.Header>
        <Modal.Body>
          <Card style={{ width: '100%' }}>
            <Card.Body 
              style={{
                paddingTop:'0px',
                marginBottom:'0px', 
                paddingBottom:'0px'
              }}>

              <div 
                className="card-header" 
                style={{borderBottom:'1px solid rgba(0,0,0,0.2)', 
                paddingTop:'10px', 
                paddingBottom:'0px'}}
              >
                <div style={{float:'left', marginTop:'10px'}}>
                  <h5>Cambio de Aceite</h5>
                </div>

                <div className="col-4" style={{ marginLeft:'auto'}} >
                  <h6 
                    style={{ background:'rgb(179,226,1)',
                    height:'40px', 
                    paddingTop:'10px', 
                    borderRadius:'20px'}}
                  >
                    <span>{'S/.'}{this.state.price}</span>
                    <FontAwesomeIcon 
                      icon={this.state.flag?faCheckCircle:faPlusCircle} 
                      className="ml-3" 
                      color='green' 
                      onClick={
                        ()=>{
                          this.props.onClick(this.state.price, "Revisión por Kilometraje", this.state.time);
                          this.setState({flag: !this.state.flag})
                        }}
                    />
                  </h6>
                </div>
              </div>
              <div 
                style={{fontSize:'14px', fontFamily:'myfont2', color:'grey'}} 
                className="p-3"
              >
                <FontAwesomeIcon icon={faClock} size="0.5x"/>{' '}<span>Duración 30 min</span><br/>
                <FontAwesomeIcon icon={faShieldAlt} size="0.5x"/>{' '}<span>Garantía 8 día(s) o 200 Km</span>
              </div>

              <div className="content pl-3">
                <div className="choose_type">
                  <h6>Aceite de Motor</h6>
                  <div>{this.state.type_referr}
                    <button 
                      className="btn p-0 pl-2 pr-2" 
                      style={{backgroundColor:'rgba(0,0,0,0.2)', 
                      color:'white', height:'30px', borderRadius:'20px'}}>
                        modificar <FontAwesomeIcon icon={faPencilAlt}/>
                    </button>
                  </div>
                </div>

                <div className="pt-2 pb-2">
                  <h6>Filtro de Aceite</h6>
                </div>
                <div className="pt-2 pb-2">
                  <h6>Mano de obra</h6>
                </div>
                
                <div className="pt-2 pb-2" style={{width:'100%'}}>
                  <h6 style={{float:'left'}}>Filtro de Aire</h6>
                  <div className="" align="right" style={{width:'100%'}}>
                    <h6 
                      style={{ 
                        background:'rgb(179,226,1)',
                        height:'30px', 
                        paddingTop:'7px', 
                        width:'200px', 
                        borderRadius:'20px'
                      }}>
                      <span>POR COTIZAR</span>
                      <FontAwesomeIcon 
                        icon={this.state.flag?faCheckCircle:faPlusCircle} 
                        className="ml-3" 
                        color='green' 
                        onClick={
                          ()=>{
                            this.props.onClick(0, "Revisión por Kilometraje", '15');
                            this.setState({flag: !this.state.flag})
                          }}
                      />
                    </h6>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <p align="center">Todos nuestros aceites son sellados en contenedores por cuarto</p>

        </Modal.Body>
      </Modal>
    );
  }
}

export default OilChange;