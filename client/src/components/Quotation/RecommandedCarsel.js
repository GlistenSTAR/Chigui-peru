import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import OilChange from '../minicomponents/OilChange';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default ({ addCart, addFreeServices }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [chagneOil, setChangeOil] = useState(false);
  const [froznShow, setFrzonShow] = useState(false);
  const [tireshow, setTireShow] = useState(false);
  const [iceDeviceShow, setIceDeviceShow] = useState(false);
  const [flag, setFlag] = useState(false);
  const [button, setButton] = useState('');
  const [button_top, setButton_top] = useState('');

  const chevronWidth = 40;
  const { innerWidth: width } = window;

  return (
    <div className="carsel1">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={width < 748 ? 3 : 6}
        gutter={20}
        leftChevron={<button className="btn btn-sm btn-outline-green">{'<'}</button>}
        rightChevron={<button className="btn btn-sm btn-outline-green">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div onClick={() => { setChangeOil(true); }}>
          <div align="center">
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/cambio_de_aceite.png')} />
              <Card.Body>
                <Card.Text>
                  Cambio de aceite
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div >
          <div align="center" onClick={() => setTireShow(true)}>
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/cambio_llanta.png')} />
              <Card.Body>
                <Card.Text>
                  Cambio de llanta
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div >
          <div align="center" onClick={() => setFrzonShow(true)}>
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/liquido_frenos.png')} />
              <Card.Body>
                <Card.Text>
                  Liquido de frenos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div >
          <div align="center" onClick={() => setIceDeviceShow(true)}>
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/liquido_refrigerante.png')} />
              <Card.Body>
                <Card.Text>
                  Liquido refrigerante
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </ItemsCarousel>

      {/* modal area */}
      <OilChange
        show={chagneOil}
        hide={() => setChangeOil(false)}
        onClick={(price, name, time) => {
          addCart(price, name, time);
        }}
      />
      <Modal show={froznShow} onHide={() => setFrzonShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Líquido de Frenos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <h5>Cambio de Liquido de Frenos</h5>
                  <div style={{ fontFamily: 'serif', color: 'grey' }}>
                    <FontAwesomeIcon icon={faClock} size="sm" style={{ color: 'blue' }} />{' '}<span >Duración 35 min</span><br />
                    <FontAwesomeIcon icon={faShieldAlt} size="sm" style={{ color: 'blue' }} />{' '}<span >Garantía 6 mes(es) o 5000 Km</span>
                  </div>
                </div>
                <div className="col-md-6 pt-3" align="right">
                  <h6 align="center" style={{ background: 'rgb(179,226,1)', height: '40px', width: '200px', paddingTop: '10px', borderRadius: '20px' }}>
                    <span>{'S/.'}20</span>
                    <FontAwesomeIcon icon={flag ? faCheckCircle : faPlusCircle} className="ml-3" color='green'
                      onClick={
                        () => {
                          addCart(20, "Líquido de Frenos", 35);
                          setFlag(!flag);
                        }}
                    />
                  </h6>
                </div>
              </div>
              <div className="mt-3">
                <ul className="list-group">
                  <li className="list-group-item" style={{ backgroundColor: '#F3F3F3' }}>Liquido de Frenos</li>
                  <li className="list-group-item mt-2" style={{ backgroundColor: '#F3F3F3' }}>Mano de obra</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal show={froznShow} onHide={() => setFrzonShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Líquido de Frenos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <h5>Cambio de Liquido de Frenos</h5>
                  <div style={{ fontFamily: 'serif', color: 'grey' }}>
                    <FontAwesomeIcon icon={faClock} size="sm" style={{ color: 'blue' }} />{' '}<span >Duración 35 min</span><br />
                    <FontAwesomeIcon icon={faShieldAlt} size="sm" style={{ color: 'blue' }} />{' '}<span >Garantía 6 mes(es) o 5000 Km</span>
                  </div>
                </div>
                <div className="col-md-6 pt-3" align="right">
                  <h6 align="center" style={{ background: 'rgb(179,226,1)', height: '40px', width: '200px', paddingTop: '10px', borderRadius: '20px' }}>
                    <span>{'S/.'}20</span>
                    <FontAwesomeIcon icon={flag ? faCheckCircle : faPlusCircle} className="ml-3" color='green'
                      onClick={
                        () => {
                          addCart(20, "Líquido de Frenos", 35);
                          setFlag(!flag);
                        }}
                    />
                  </h6>
                </div>
              </div>
              <div className="mt-3">
                <ul className="list-group">
                  <li className="list-group-item" style={{ backgroundColor: '#F3F3F3' }}>Liquido de Frenos</li>
                  <li className="list-group-item mt-2" style={{ backgroundColor: '#F3F3F3' }}>Mano de obra</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal show={tireshow} onHide={() => setTireShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ELIGE EL RIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row" style={{ borderBottom: '1px solid grey', marginBottom: '4px', marginLeft: '5px', marginRight: '5px', paddingBottom: '10px' }}>
              <div className="col-md-6">
                Rin 14
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 14 ? "active" : '')} onClick={() => setButton_top(14)}>SELECCIONAR</button>
              </div>
            </div>
            <div className="row" style={{ borderBottom: '1px solid grey', marginBottom: '4px', marginLeft: '5px', marginRight: '5px', paddingBottom: '10px' }}>
              <div className="col-md-6">
                Rin 15
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 15 ? "active" : '')} onClick={() => setButton_top(15)}>SELECCIONAR</button>
              </div>
            </div>
            <div className="row" style={{ borderBottom: '1px solid grey', marginBottom: '4px', marginLeft: '5px', marginRight: '5px', paddingBottom: '10px' }}>
              <div className="col-md-6">
                Rin 16
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 16 ? "active" : '')} onClick={() => setButton_top(16)}>SELECCIONAR</button>
              </div>
            </div>
            <div className="row" style={{ borderBottom: '1px solid grey', marginBottom: '4px', marginLeft: '5px', marginRight: '5px', paddingBottom: '10px' }}>
              <div className="col-md-6">
                Rin 17
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 17 ? "active" : '')} onClick={() => setButton_top(17)}>SELECCIONAR</button>
              </div>
            </div>

            <div className="row" style={{ borderBottom: '1px solid grey', marginBottom: '4px', marginLeft: '5px', marginRight: '5px', paddingBottom: '10px' }}>
              <div className="col-md-6">
                Rin 18
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 18 ? 'active' : '')} onClick={() => setButton_top(18)}>SELECCIONAR</button>
              </div>
            </div>

            <div className="row" style={{ borderBottom: '1px solid grey', marginBottom: '4px', marginLeft: '5px', marginRight: '5px', paddingBottom: '10px' }}>
              <div className="col-md-6">
                Rin 19
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 19 ? 'active' : '')} onClick={() => setButton_top(19)}>SELECCIONAR</button>
              </div>
            </div>

            <h5 style={{ color: 'rgb(179,226,1)' }}>AMABLE</h5>
            <div className="row">
              <div className="btn-group" style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
                <button className={button === 14 ? 'active' : ''} style={{ width: '50%' }} onClick={() => { setButton(1) }}>*1</button>
                <button className={button === 15 ? 'active' : ''} style={{ width: '50%' }} onClick={() => { setButton(2) }}>*2</button>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4" style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-around' }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                let tempRin = [];
                let tempRin_cart = {}
                tempRin_cart.title = "ELIGE EL RIN";
                if (typeof button_top !== "undefined") {
                  tempRin.push(button_top);
                  tempRin_cart.content = "[Rin:" + button_top.toString() + "]";
                }
                if (typeof button !== "undefined") {
                  tempRin.push(button);
                  tempRin_cart.content = tempRin_cart.content + "[Cantidad:" + button.toString() + "]";
                }
                if (tempRin.length > 0) {
                  addFreeServices(0, 'Cambio de Llanta', 45, tempRin);
                  addCart("POR COTIZAR", tempRin_cart, 45);
                }
              }
              }
            >AGREGAR</button>
            <button className="btn btn-info">POR COTIZAR</button>
            <div className="ring-number">

            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={iceDeviceShow} onHide={() => setIceDeviceShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Líquido Refrigerante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-6" style={{ verticalAlign: 'center' }}>
                  <div className="row">
                    <div className="col-md-2 circle_icon">
                      <FontAwesomeIcon icon={faClock} style={{ color: 'rgb(179,226,1)', fontSize: '35px' }} />
                    </div>
                    <div className="col-md-9" style={{ fontSize: '14px' }}>
                      Tiempo estimado<br />
                      <span style={{ fontSize: '12px', fontFamily: 'serif' }}>45 min</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" align="right">
                  <div className="row">
                    <div className="col-md-5 circle_icon" align="right">
                      <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'rgb(179,226,1)', fontSize: '35px', textAlign: 'right' }} />
                    </div>
                    <div className="col-md-6" style={{ fontSize: '14px' }} align="left">
                      Garantía<br />
                      <span style={{ fontSize: '12px', fontFamily: 'serif', textAlign: 'left' }}>6 mes(es) o 10000 Km</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row m-2 p-2" style={{ borderRadius: '10px', border: '2px solid #B3E201' }}>
                  <div className="col-md-6">
                    Cambio de Refrigerante de Motor
                  </div>
                  <div className="col-md-6" align="right">
                    {'S/.'}25
                    <FontAwesomeIcon icon={flag ? faCheckCircle : faPlusCircle} className="ml-3" color='green'
                      onClick={
                        () => {
                          addCart(25, "Cambio de Refrigerante de Motor", 45);
                          setFlag(!flag);
                        }}
                    />
                  </div>
                  <hr className="mt-2" style={{ color: 'grey' }} />
                  <div style={{ color: 'grey' }} className="ml-3">
                    <li>Refrigerante de Motor</li>
                    <li>Mano de obra</li>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>

  );
};