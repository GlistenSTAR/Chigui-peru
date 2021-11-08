import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlusCircle, faCheckCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default ({ addCart }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [electronicData, setElectronicData] = useState([]);
  const [batteryShow1, setBatteryShow1] = useState(false);
  const [batteryShow2, setBatteryShow2] = useState(false);
  const [batteryShow3, setBatteryShow3] = useState(false);
  const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [flag3, setflag3] = useState(false);

  const chevronWidth = 40;
  const { innerWidth: width } = window;
  let modalcontent;

  useEffect(() => {
    axios
      .get("/api/electronics")
      .then(response => setElectronicData(response.data));
  }, []);

  if (electronicData.length > 0) {
    modalcontent = electronicData.map((item, index) => (
      <Modal
        show={index === 0 ? (batteryShow1) : index === 1 ? batteryShow2 : batteryShow3}
        onHide={() => index === 0 ? setBatteryShow1(false) : index === 1 ? setBatteryShow2(false) : setBatteryShow3(false)}
        key={index}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
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
                  <span style={{ fontSize: '12px', fontFamily: 'serif' }}> min</span>
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
                  <span style={{ fontSize: '12px', fontFamily: 'serif', textAlign: 'left' }}>6 mes(es) o 10000 Km</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: '10px', border: '2px solid #B3E201' }}>
            <div className="row m-2 p-2">
              <div className="col-md-6">
                Cambio de Refrigerante de Motor
              </div>
              <div className="col-md-6" align="right">
                {'S/.'}{item.price}
                <FontAwesomeIcon
                  icon={
                    index === 0 ? (flag1 ? faCheckCircle : faPlusCircle) :
                      index === 1 ? (flag2 ? faCheckCircle : faPlusCircle) :
                        (flag3 ? faCheckCircle : faPlusCircle)}
                  className="ml-3"
                  color='green'
                  onClick={
                    () => {
                      addCart(item.price, item.name, 30);
                      index === 0 ? setflag1(!flag1) : index === 1 ? setflag2(!flag2) : setflag3(!flag3);
                    }}
                />
              </div>

              <hr className="mt-2" style={{ color: 'grey', width: '100%', borderTopColor: 'grey' }} />
              <div style={{ color: 'grey' }} className="ml-3">
                <li>{item.description}</li>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    ));
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
        <div onClick={() => setBatteryShow1(true)}>
          <div align="center">
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
              <Card.Body>
                <Card.Text>
                  Carga de Bateria
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div onClick={() => setBatteryShow2(true)}>
          <div align="center">
            <Card align="center">
              <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
              <Card.Body>
                <Card.Text style={{ marginTop: 'auto', marginBottom: 'auto' }} className="oneRow">
                  Solo Bateria
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div onClick={() => setBatteryShow3(true)}>
          <div align="center">
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
              <Card.Body>
                <Card.Text className="threeRow">
                  Refrigerante de Motor
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </ItemsCarousel>
      {modalcontent ? modalcontent : ''}
    </div>
  );
};