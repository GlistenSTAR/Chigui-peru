import React, { Component } from "react"; 
import axios from 'axios'
import { Modal, Card, Button, Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faClock, 
  faShieldAlt, 
  faPlusCircle, 
  faCheckCircle, 
  faPencilAlt, 
  faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class OilChange extends Component {
  constructor(props){
    super(props);
    this.state={
      oil:[],
      price:21, 
      time:0,
      flag: false,
      type_referr:'',
      show_oil_list:false,
      name:'MOBIL',
      referr:'20W-50',
      show_again: false,
      flag1 : false
    }
  }
  componentDidMount(){
    axios
      .get("/api/oils")
      .then(response => this.setState({oil : response.data}));
  }
  selectOil = (e) =>{
    this.setState({show_oil_list:true});
  }
  onBack = (e) =>{
    this.setState({ show_oil_list : false })
  }
  chooseOil = ()=>{
    this.setState({show_oil_list: false})
    if (this.state.flag){
      console.log(1);
      this.props.onClick(this.state.price, "updatePrice", '15');
    }
  }
  render() {
    let ChooseReferr;
    if(this.state.oil.length > 0){
      ChooseReferr = this.state.oil.map((item, index)=>(
        <div 
          key={index} 
          style={{borderBottom:'1px soild black'}} 
          onClick={()=> 
            this.setState({referr:item.referr, name:item.name, price: item.price})
          }>
          <label className="form-check-label m-2 d-flex justify-content-between" style={{paddingLeft:'50px'}}>
            <input 
              type="radio" 
              className="form-check-input" 
              name="optradio" 
              defaultChecked={index === 0 ? true:false}
            />
            {item.name} || {item.referr} <span>S/.{item.price}</span>
          </label>
        </div>
      ))
    }

    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton> Cambio de Aceite </Modal.Header>
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
                  style={{ 
                  paddingTop:'10px', 
                  paddingBottom:'0px'}}
                >
                  <div style={{float:'left', marginTop:'10px'}}>
                    <h5>Cambio de Aceite</h5>
                  </div>

                  <div className="col-4" style={{ marginLeft:'auto'}}>
                    <h6 
                      style={{ background:'rgb(179,226,1)',
                      height:'40px', 
                      paddingTop:'10px', 
                      borderRadius:'20px'}}
                      align="center"
                    >
                      <span>{typeof this.state.price === "string" ? this.state.price : 'S/.'+ this.state.price}</span>
                      <FontAwesomeIcon 
                        icon={ this.state.flag ? faCheckCircle : faPlusCircle } 
                        className="ml-3" 
                        color='green' 
                        onClick={
                          ()=>{
                            this.props.onClick(this.state.price, "Revisión por Kilometraje", '15');
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
                  <FontAwesomeIcon icon={ faClock } size="sm" style={{color:'blue'}}/>{' '}<span >Duración 15 min</span><br/>
                  <FontAwesomeIcon icon={ faShieldAlt } size="sm"  style={{color:'blue'}}/>{' '}<span>Garantía 8 día(s) o 200 Km</span>
                </div>

                <div className="content pl-3">
                  <div className="choose_type">
                    <h6>Aceite de Motor</h6>
                    <div style={{fontFamily:'serif', fontSize:'15px'}}>
                      {this.state.referr} {' '} {this.state.name}
                      <button 
                        className="btn p-0 pl-2 pr-2 ml-2" 
                        style={{backgroundColor:'rgba(0,0,0,0.2)', 
                        color:'white', height:'30px', borderRadius:'20px'}}
                        onClick={this.selectOil}
                      >
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
                        align="center"
                        style={{ 
                          background:'rgb(179,226,1)',
                          height:'30px', 
                          paddingTop:'7px', 
                          width:'200px', 
                          borderRadius:'20px'
                        }}>
                        <span>POR COTIZAR</span>
                        <FontAwesomeIcon 
                          icon={ this.state.flag1 ? faCheckCircle : faPlusCircle } 
                          className="ml-3" 
                          color='green' 
                          onClick={
                            ()=>{
                              this.props.onClick("POR COTIZAR", "Filtro de Aire", '15');
                              this.setState({flag1: !this.state.flag1})
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
        {this.state.show_oil_list?(
          <Modal show={this.state.show_oil_list} onHide={()=>{this.setState({show_oil_list:false});}}>
            <Modal.Header closeButton>
              <FontAwesomeIcon icon={faAngleLeft} onClick={this.onBack} style={{cursor:"pointer"}}/>
              Modificar Aceite
            </Modal.Header>
            <Modal.Body>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Card.Header style={{paddingTop:'0px', paddingBottom:'0px', backgroundColor:'rgb(179,226,1)'}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{float:'left',color:'white'}}>
                      OIL REFERENCE
                    </Accordion.Toggle>                    
                    <span style={{position:'absolute', right:'10px', top:'7px', color:'white'}}>{this.state.name} {this.state.name?' || ':''} {this.state.referr}</span>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {ChooseReferr}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Modal.Body>
            <button className="btn btn-man-made m-3" onClick={this.chooseOil}>Aceptar</button>
          </Modal>
        ):''}
      </div>
    );
  }
}

export default OilChange;