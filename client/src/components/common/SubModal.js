import React, { Component } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,  faCheckCircle,  faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {Card, Modal} from 'react-bootstrap'


class SubModalTemplate extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render() {
    const {
      headerContent, 
      onModal, 
      onModalClose,
      onBack,
      data
    } = this.props;

    let content = data.map((item, key)=>{
      let minicontent = item.service_list.map((value, index)=>(
        <li key={index}>{value}</li>
      )); 
      let flag=item.subname;
      return (
        <div className="row mt-2 mb-3" key={key}>
          <div className="model-card">
            <Card style={{width:'100%'}}>
              <div className="row">
                <div className="col-8" style={{ marginTop:'auto', marginBottom:'auto'}}>
                  <h5 align="left" style={{ textTransform :'uppercase', fontSize:'14px'}}>Diagnósticos {item.subname}</h5>
                </div>  
                <div className="col-4" style={{height:'50px'}}>
                  <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                    <span>{'S/.'}{item.price}</span>
                    <FontAwesomeIcon icon={this.state[flag]===1?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                      onClick={
                        ()=>{
                          this.props.onchange2(item.price, item.subname, item.time);
                          if(this.state[item.subname]!==1){
                            this.setState({[item.subname] : 1})
                          } else{
                            this.setState({[item.subname] : 0})
                          }
                        }}
                    />
                  </h6>
                </div>
                <hr style={{marginTop:'-8px', width:'95%'}}/>
              </div>
              <Card.Body>
                <Card.Text style={{marginTop:'-15px'}}>
                  <span style={{fontStyle:'italic', fontSize:'12px', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
                  {minicontent}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
    )});

    return (
      <Modal
        show={onModal}
        onHide={onModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{background:'rgb(179,226,1)', textTransform :'uppercase'}}>
          <Modal.Title style={{fontSize:'18px'}}><FontAwesomeIcon icon={faAngleLeft} onClick={onBack} style={{cursor:"pointer"}}/>{' '}Diagnósticos {' '}{headerContent}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {content}
          </Modal.Body>
      </Modal>
    );
  }
}

export default SubModalTemplate;