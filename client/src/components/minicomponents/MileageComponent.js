import React, { Component } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal} from 'react-bootstrap'
import { faClock, faCaretRight, faPlusCircle, faCheckCircle, faShieldAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap'
import ListComponent from '../common/List';

class MileageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false,
      show1: false
    };
  }
  render() {
    let {data, show, hide } = this.props;
    return (
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
        REVISION POR KILOMETRAJE
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="row  m-2">
              <div className="col-8" style={{ marginTop:'auto', marginBottom:'auto'}}>
                <h5 align="left" style={{ textTransform :'uppercase', fontSize:'18px'}}>Revision por Kilometraje</h5>
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
                <span style={{fontStyle:'italic', fontSize:'14px', color:'rgba(0,0,0,0.7)'}}>También conocido como mantenimiento por kilometraje. Este servicio incluye:</span>
              </Card.Text>
              <Card style={{ width: '100%',borderRadius:'10px',outlineColor: "rgb(234,234,234)" }}>
                <Card.Body style={{paddingTop:'10px', paddingBottom:'10px'}}>
                  <div>
                    <div className="row pl-3 pr-3" onClick={()=>{ this.setState({show1: !this.state.show1})}}>
                      <FontAwesomeIcon icon={this.state.show1?faCaretDown:faCaretRight} size="2x" color="rgb(179,226,1)"/>
                      <span style={{marginTop:'auto', marginBottom:'auto', fontSize:'18px'}} className="ml-3">Esta la de revisión  general</span>
                      <div style={{marginTop:'auto', marginBottom:'auto', fontSize:'18px', marginLeft:'auto'}}>{'S/.'}{data.price}</div>
                    </div>
                    {this.state.show1?(
                      <div className="pl-2" style={{color:'grey'}}>
                        <div style={{fontSize:'14px', fontFamily:'myfont2'}}>
                          <FontAwesomeIcon icon={faClock} />{' '}<span>Duración 30 min</span><br/>
                          <FontAwesomeIcon icon={faShieldAlt} />{' '}<span>Garantía 8 día(s) o 200 Km</span>
                        </div>
                        <ListComponent data={typeof data.data!=="undefined"?data.data[0].detail:null}/>
                      </div>
                    ):''}
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MileageComponent;