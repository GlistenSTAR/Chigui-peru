import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import SubModalTemplate from './SubModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class ModalTemplate extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
      let MainContent, TotalServices;
      let {data,show, hide, type} = this.props;
      if(data.length > 0){
        TotalServices = data.map((item, index)=>{
          let submodal_index = "submodal"+index;
          let obj = {};
          return(
            <div key={index} className="list">
              <div className="row mt-2 mb-3" onClick={() => {
                  obj[submodal_index] = true;
                  this.setState(obj);
                }}>
                <div className="col-md-9 col-9">
                  {item.name}
                </div>
                <div className="col-md-3 col-3" align="right">
                {
                  (item.name === "En el Liquidos/fugas") || (item.name === "En las llantas y suspension") || (item.name === "En los frenos" ) ?
                  <span></span>
                  :
                  <span class="badge badge-success">Incluye escáner</span>
                  
                }
                  <FontAwesomeIcon icon={faAngleRight}/>
                </div>
              </div>

              <SubModalTemplate 
                headerContent={item.name}
                data={item.subdata}
                onModal={this.state[submodal_index]}
                onModalClose={() => {
                    obj[submodal_index] = false;
                    this.setState(obj);
                  }
                }
                onBack={() => {
                  obj[submodal_index] = false;
                  this.setState(obj);
                }}
                onchange2={(price, name, time)=>this.props.onchange1(price, name, time)}
              />
            </div>
          );
        });
      }

      if( type === 1 ){
          MainContent = (
            <Modal
              show={ show }
              onHide={ hide }
              backdrop="static"
              keyboard={false}
            > 
              <Modal.Header closeButton>
                <Modal.Title>¿Donde se presentan las fallas?  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {TotalServices}
              </Modal.Body>
              <Modal.Footer align="center">
                <a type='button' rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=51966008620&fbclid=IwAR06Fjb22h2X8rBI2OXE7UqZvAh5xCFmeLbgO5EGxeuceXYHGWxhe69pWuQ" target="_blank" className="btn btn-default btn-outline-secondary">¿No encuentras tu vehículo?</a>
              </Modal.Footer>
            </Modal>);
      } else if(type === 2){
  
      }
      
      return (
        <div>
          {MainContent}
        </div>
    );
  }
}

export default ModalTemplate;