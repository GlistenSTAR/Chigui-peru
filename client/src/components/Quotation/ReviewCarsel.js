import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckCircle, faPlusCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

export default ({ addCart }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [batteryShow, setBatteryShow] = useState(false);
  const [expertiseShow, setExpertiseShow] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2_1, setFlag2_1] = useState(false);
  const [flag2_2, setFlag2_2] = useState(false);
  const chevronWidth = 40;
  const { innerWidth: width } = window;

  let battery, content;

  useEffect(() => {
    axios.get('/api/reviews').then((res) => {
      setReviewData(res.data);
    });
  }, []);
  if (reviewData.length > 0) {
    battery = reviewData[0];
    content = reviewData[1].data.map((item, index) => (
      <div className="m-4" key={index} style={{ borderBottom: '1px solid grey' }}>
        <div className="row">
          <div className="col-md-6">
            <h5>{item.subname}</h5>
            <p style={{ fontFamily: 'serif' }}>
              <FontAwesomeIcon icon={faClock} />  Duración: {item.time} mins
            </p>
          </div>
          <div className="col-md-6" align="right">
            <h6 align="center" style={{ background: 'rgb(179,226,1)', height: '30px', paddingTop: '7px', width: '200px', borderRadius: '20px' }}>
              <span>{'S/.'}{item.price}</span>
              <FontAwesomeIcon icon={index === 0 ? (flag2_1 ? faCheckCircle : faPlusCircle) : (flag2_2 ? faCheckCircle : faPlusCircle)} className="ml-3" color='green'
                onClick={
                  () => {
                    index === 0 ? setFlag2_1(!flag2_1) : setFlag2_2(!flag2_2);
                    addCart(item.price, item.subname, item.time, null);
                  }}
              />
            </h6>
          </div>
        </div>
        <p style={{ fontFamily: 'serif', color: 'grey' }}>{item.description}</p>
      </div>
    ))
  }
  return (
    <div className="carsel1">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={width < 968 ? 3 : 6}
        gutter={20}
        leftChevron={<button className="btn btn-sm btn-outline-green">{'<'}</button>}
        rightChevron={<button className="btn btn-sm btn-outline-green">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div onClick={() => setBatteryShow(true)}>
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
        <div onClick={() => setExpertiseShow(true)}>
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

      <Modal show={batteryShow} onHide={() => setBatteryShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Revisión de Batería</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6" style={{ verticalAlign: 'center' }}>
              <div className="row">
                <div className="col-md-2 circle_icon">
                  <FontAwesomeIcon icon={faClock} style={{ color: 'rgb(179,226,1)', fontSize: '35px' }} />
                </div>
                <div className="col-md-9" style={{ fontSize: '14px' }}>
                  Tiempo estimado<br />
                  <span style={{ fontSize: '12px', fontFamily: 'serif' }}>{battery ? battery.data[0].time : ''} min</span>
                </div>
              </div>
            </div>
            <div className="col-md-6" align="right">
              <div className="row">
                <div className="col-md-6 circle_icon" align="right">
                  <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'rgb(179,226,1)', fontSize: '35px', textAlign: 'right' }} />
                </div>
                <div className="col-md-5" style={{ fontSize: '14px' }} align="left">
                  Garantía<br />
                  <span style={{ fontSize: '12px', fontFamily: 'serif', textAlign: 'left' }}>8 día(s) o 200 Km</span>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <Card.Body>
              <div className="row" style={{ borderBottom: '1px solid grey' }}>
                <div className="col-md-6">
                  <li>Servicio de Desvare</li>
                </div>
                <div className="col-md-6" align="right">
                  <h6 align="center" style={{ background: 'rgb(179,226,1)', height: '30px', paddingTop: '7px', width: '200px', borderRadius: '20px' }}>
                    S/.{battery ? battery.data[0].price : ''}
                    <FontAwesomeIcon icon={flag1 ? faCheckCircle : faPlusCircle} className="ml-3" color='green'
                      onClick={
                        () => {
                          addCart(battery ? battery.data[0].price : 0, "REVISIÓN DE BATERÍA", battery ? battery.data[0].time : 0, null);
                          setFlag1(!flag1)
                        }}
                    />
                  </h6>
                </div>
              </div>
              <div className="ml-4 mt-2" style={{ color: 'grey' }}>
                <li>Mano de obra</li>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal show={expertiseShow} onHide={() => setExpertiseShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Peritaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content ? content : ''}
        </Modal.Body>
        <div className="mt-2 mb-3" align="center" style={{ display: 'flex' }}>
          <div className="motocycle pt-1 pb-3">
          </div>
        </div>
      </Modal>
    </div>
  );
}

