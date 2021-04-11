import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import SubModalTemplate from './SubModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

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
            <div key={index}>
              <div className="row mt-2 mb-3" onClick={() => {
                  obj[submodal_index] = true;
                  this.setState(obj);
                }}>
                <div className="col-md-9 col-9">
                  {item.name}
                </div>
                <div className="col-md-3 col-3" align="right">
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
                onchange2={(price, name)=>this.props.onchange1(price, name)}
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
              <Modal.Header closeButton style={{background:'rgb(179,226,1)', textTransform :'uppercase'}}>
                <Modal.Title style={{fontSize:'18px'}}>¿Donde se presentan las fallas?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {TotalServices}
              </Modal.Body>
              <Modal.Footer align="center">
                <button className="btn btn-default">¿No encuentras las fallas que necesitas?</button>
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