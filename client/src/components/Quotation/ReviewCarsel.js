import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [batteryShow, setBatteryShow] = useState(false);
  const [expertiseShow, setExpertiseShow] = useState(false);
  const chevronWidth = 40;
  const { innerWidth: width} = window;

  useEffect(() => {
    axios.get('/api/reviews').then((res) => { 
      setReviewData(res.data);
    });
  }, []);
  
  return (
    <div className="carsel1">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={width<968?3:6}
        gutter={20}
        leftChevron={<button className="btn btn-sm btn-outline-green">{'<'}</button>}
        rightChevron={<button className="btn btn-sm btn-outline-green">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div onClick={()=>setBatteryShow(true)}>
          <div align="center">
              <Card>  
                <Card.Img variant="top" src={require('../../img/icons/revission de bateria.png')} />
                <Card.Body>
                  <Card.Text>
                    Revision de bateria
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>
        <div onClick={()=>setExpertiseShow(true)}>
          <div align="center" >
              <Card>
                <Card.Img variant="top" src={require('../../img/icons/peritaje.png')} />
                <Card.Body>
                  <Card.Text className="oneRow">
                    Peritaje
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>
      </ItemsCarousel>
      
      <Modal show={batteryShow} onHide={()=> setBatteryShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Revisión de Batería</Modal.Title>
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
                  <span style={{fontSize:'12px', fontFamily:'serif'}}> min</span>
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
        </Modal.Body>
      </Modal>
      
      <Modal show={expertiseShow} onHide={()=> setExpertiseShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Revisión de Batería</Modal.Title>
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
                  <span style={{fontSize:'12px', fontFamily:'serif'}}> min</span>
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

