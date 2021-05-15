import React, { Component } from "react"; 
import { Modal, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class ElectronicModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag : false,
      flag1 : false,
      select_battery_show : false,
      selected_battery_name: '',
      selected_battery_referr: '',
      selected_battery_price: '',
    }
  }
  componentDidMount(){
    axios.get('/api/batteries').then((res) => { 
      this.setState({data : res.data});
    });
  }
  render() {
    let content;
    if(typeof this.state.data !== "undefined"){
      content = this.state.data.map((item, index)=>(
        <div key={index} className="mt-1 mb-1" onClick={()=>{
          this.setState({selected_battery_name: item.brand});
          this.setState({selected_battery_referr: item.referrence});
          this.setState({selected_battery_price: item.price});
          this.setState({select_battery_show: false});
        }}>
          <Card className="select_battery">  
            <Card.Body>
              <div className="row">
                <div className = "col-md-6 pl-5" style={{display:'flex'}}>
                  <h5>{item.brand}</h5>{' '}-{' '} <label style={{color:'grey'}}>{item.referrence}</label>
                </div>
                <div className="col-md-6 pr-5" align="right" style={{color:'grey'}}>
                  <div class="form-check">
                    <label class="form-check-label" >
                      <input type="radio" class="form-check-input" name="optradio"/>S/.{' '}{item.price}
                    </label>
                  </div>
                </div>
              </div>
              <div style={{background:'whitesmoke', color:'grey'}} align="center">Mano de obra</div>
            </Card.Body>
          </Card>
        </div>
      ));
    }
    return (
     <div>
       <Modal show={this.props.first} onHide={this.props.hideFirst}>
        <Modal.Header closeButton>
          <Modal.Title>Pastilla de frenos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6" style={{ verticalAlign : 'center'}}>
              <div className="row">
                <div className="col-md-2 circle_icon">
                  <FontAwesomeIcon icon={faClock} style={{color:'rgb(179,226,1)', fontSize:'35px'}}/>
                </div>
                <div className="col-md-9" style={{fontSize:'14px'}}>
                  Tiempo estimado<br/>
                  <span style={{fontSize:'12px', fontFamily:'serif'}}>20 min</span>
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
                  <span>{'S/.'} 25</span>
                  <FontAwesomeIcon icon={this.state.flag?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                    onClick={
                      ()=>{
                        this.setState({flag: !this.state.flag});
                        this.props.addCart(25, "Pastilla de frenos", 20);
                      }}
                  />
                </h6>
              </div>
              <hr style={{borderColor:'grey'}}/>
            </div>
            <Card.Body>
              <Card.Text style={{marginTop:'-15px'}}>
                <span style={{fontStyle:'italic', fontSize:'12px', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                <li>pastillas de frenos</li>
                <li>mano de obra</li>
              </Card.Text>
            </Card.Body>
          </div>
        </Modal.Body>
      </Modal>
       <Modal show={this.props.second} onHide={this.props.hideSecond}>
        <Modal.Header closeButton>
          <Modal.Title>Cambio de Bateria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6" style={{verticalAlign:'center'}}>
              <div className="row">
                <div className="col-md-2 circle_icon">
                  <FontAwesomeIcon icon={faClock} style={{color:'rgb(179,226,1)', fontSize:'35px'}}/>
                </div>
                <div className="col-md-9" style={{fontSize:'14px'}}>
                  Tiempo estimado<br/>
                  <span style={{fontSize:'12px', fontFamily:'serif'}}>15 min</span>
                </div>
              </div>
            </div>
            <div className="col-md-6" align="right">
              <button className="btn btn-success" onClick={()=>this.setState({select_battery_show : true})}>Seleccionar batería</button>
            </div> 
            <hr style={{borderColor:'grey', width:'100%'}}/>
            <Card.Body>
              <Card.Text style={{marginTop:'-15px'}}>
                <div className="row">
                    <div className="col-md-6">
                      <span style={{fontStyle:'italic', fontSize:'12px', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                      <li>pastillas de frenos</li>
                      <li>mano de obra</li>
                    </div>
                    <div className="col-md-6" align="right" style={{marginTop:'auto', marginBottom:'auto'}}>
                      {this.state.selected_battery_price.length > 0?(
                        <div className="col-md-6" align="center" style={{backgroundColor:'rgb(179, 226, 1)', borderRadius:'20px'}}>
                          S/.{this.state.selected_battery_price}
                          <FontAwesomeIcon icon={this.state.flag1?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                            onClick={
                              ()=>{
                                this.props.addCart(this.state.selected_battery_price, this.state.selected_battery_name+"-"+this.state.selected_battery_referr, 15);
                                this.setState({flag1 : !this.state.flag1})
                              }}
                          />
                        </div>
                      ):''}
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
          </div>
        </Modal.Body>
      </Modal>

       <Modal show={this.props.third} onHide = {this.props.hideThird}>
          <div className="">third component</div>                    
       </Modal>

       <Modal show={this.props.fourth} onHide = {this.props.hideFourth}>
          <div className="">fourth component</div>                    
       </Modal>

        <Modal show={this.state.select_battery_show} onHide={()=> this.setState({ select_battery_show: false})}>
          <Modal.Header closeButton>
          <Modal.Title>Cambio de Bateria</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {content}
          </Modal.Body>
        </Modal>
     </div>
    );
  }
}

export default ElectronicModal;