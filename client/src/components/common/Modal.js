import React from 'react'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShoppingCart, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


export default function ModalTemplate({show, hide, data}) {
  let TotalServices;
  if(data.length > 0){
    TotalServices = data.map((item, index)=>{
      return(
        <div className="row mt-2 mb-3" onClick={()=>{this.setState(item.clickEventData, ...this.state)}} key={index}>
          <div className="col-md-9 col-9">
            {item.name}
          </div>
          <div className="col-md-3 col-3" align="right">
            <FontAwesomeIcon icon={faAngleRight}/>
          </div>
        </div>
      );
    });
  }
  return (
    <Modal
      show={ show }
      onHide={ hide }
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
  </Modal>
  )
}
