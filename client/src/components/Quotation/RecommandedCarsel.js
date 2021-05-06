import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import OilChange from '../minicomponents/OilChange';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default ({addCart}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [chagneOil, setChangeOil] = useState(false);
  const [froznShow, setFrzonShow] = useState(false);
  const [iceDeviceShow, setIceDeviceShow] = useState(false);
  const [flag, setFlag] = useState(false);
  // let temp1, temp2;

  const chevronWidth = 40;
  const { innerWidth: width} = window;

  // useEffect(() => {
  //   axios
  //     .get("/api/highlights")
  //     .then(response => setHightlight(response.data));
  // }, []);

  // if(typeof highlight !== "undefined"){
  //   highlight.map((highlight)=>{
  //     if(highlight.serviceName === "scanner"){
  //       temp1 = highlight;
  //     }
  //     if(highlight.serviceName === "mileage"){
  //       temp2 = highlight;
  //     }
  //     return 0;
  //   });

  //   if(typeof temp1 !=="undefined" && scanData.length === 0){
  //     setScanData(temp1);
  //   }
  //   if(typeof temp2 !=="undefined" && mileageData.length === 0){
  //     setMileageData(temp2);
  //   }
  // }
  return (
    <div className="carsel1">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={width<748?3:6}
        gutter={20}
        leftChevron={<button className="btn btn-sm btn-outline-green">{'<'}</button>}
        rightChevron={<button className="btn btn-sm btn-outline-green">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div onClick={()=>{setChangeOil(true);}}>
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
          <div align="center">
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
          <div align="center" onClick={()=>setFrzonShow(true)}>
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/liquido_frenos.png')}/>
              <Card.Body>
                <Card.Text>
                  Liquido de frenos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div >
        <div align="center" onClick={()=>setIceDeviceShow(true)}>
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
        hide={()=> setChangeOil(false)} 
        onClick={(price, name, time)=>{
          addCart(price, name, time);
        }}
      />
      <Modal show={froznShow} onHide={()=> setFrzonShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Líquido de Frenos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <h5>Cambio de Liquido de Frenos</h5>
                  <div style={{fontFamily:'serif', color:'grey'}}>
                    <FontAwesomeIcon icon={faClock} size="sm"/>{' '}<span>Duración 35 min</span><br/>
                    <FontAwesomeIcon icon={faShieldAlt} size="sm"/>{' '}<span>Garantía 6 mes(es) o 5000 Km</span>
                  </div>
                </div>
                <div className="col-md-6 pt-3" align="right">
                  <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px',width:'200px', paddingTop:'10px', borderRadius:'20px'}}>
                    <span>{'S/.'}20</span>
                    <FontAwesomeIcon icon={flag?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                      onClick={
                        ()=>{
                          addCart(20, "Líquido de Frenos", 35);
                          setFlag(!flag);
                        }}
                    />
                  </h6>
                </div>
              </div>
              <div className="mt-3">
                <ul class="list-group">
                  <li class="list-group-item" style={{backgroundColor:'#F3F3F3'}}>Liquido de Frenos</li>
                  <li class="list-group-item mt-2" style={{backgroundColor:'#F3F3F3'}}>Mano de obra</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
      
      <Modal show={iceDeviceShow} onHide={()=> setIceDeviceShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Líquido de Frenos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <h5>Cambio de Liquido de Frenos</h5>
                  <div style={{fontFamily:'serif', color:'grey'}}>
                    <FontAwesomeIcon icon={faClock} size="sm"/>{' '}<span>Duración 35 min</span><br/>
                    <FontAwesomeIcon icon={faShieldAlt} size="sm"/>{' '}<span>Garantía 6 mes(es) o 5000 Km</span>
                  </div>
                </div>
                <div className="col-md-6 pt-3" align="right">
                  <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px',width:'200px', paddingTop:'10px', borderRadius:'20px'}}>
                    <span>{'S/.'}20</span>
                    <FontAwesomeIcon icon={flag?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                      onClick={
                        ()=>{
                          addCart(20, "Líquido de Frenos", 35);
                          setFlag(!flag);
                        }}
                    />
                  </h6>
                </div>
              </div>
              <div className="mt-3">
                <ul class="list-group">
                  <li class="list-group-item" style={{backgroundColor:'#F3F3F3'}}>Liquido de Frenos</li>
                  <li class="list-group-item mt-2" style={{backgroundColor:'#F3F3F3'}}>Mano de obra</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
                        
    </div>
    
  );
};