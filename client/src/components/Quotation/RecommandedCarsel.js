import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import OilChange from '../minicomponents/OilChange';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faCheckCircle, faPlusCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons';

export default ({addCart}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [chagneOil, setChangeOil] = useState(false);
  const [froznShow, setFrzonShow] = useState(false);
  const [tireshow, setTireShow] = useState(false);
  const [iceDeviceShow, setIceDeviceShow] = useState(false);
  const [flag, setFlag] = useState(false);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button_top, setButton_top] = useState('');
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
          <div align="center" onClick={()=>setTireShow(true)}>
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
                <ul className="list-group">
                  <li className="list-group-item" style={{backgroundColor:'#F3F3F3'}}>Liquido de Frenos</li>
                  <li className="list-group-item mt-2" style={{backgroundColor:'#F3F3F3'}}>Mano de obra</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

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
                <ul className="list-group">
                  <li className="list-group-item" style={{backgroundColor:'#F3F3F3'}}>Liquido de Frenos</li>
                  <li className="list-group-item mt-2" style={{backgroundColor:'#F3F3F3'}}>Mano de obra</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal show={tireshow} onHide={()=> setTireShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ELIGE EL RIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
           <div className="row" style={{borderBottom:'1px solid grey', marginBottom:'10px', marginLeft:'5px', marginRight:'5px', paddingBottom:'10px' }}>
              <div className="col-md-6">
                Rin 17
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 1 ? "active" : '')}  onClick={()=>setButton_top(1)}>SELECCIONAR</button>
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid grey', marginBottom:'10px', marginLeft:'5px', marginRight:'5px', paddingBottom:'10px'}}>
              <div className="col-md-6">
                  Rin 18
              </div>
              <div className="col-md-6" align="right">
                <h5>POR COTIZAR</h5>
                <button className={`btn btn-success ` + (button_top === 2 ? 'active' : '')} onClick={() => setButton_top(2)}>SELECCIONAR</button>
              </div>
            </div>

            <div className="row" style={{borderBottom:'1px solid grey', marginBottom:'10px', marginLeft:'5px', marginRight:'5px', paddingBottom:'10px'}}>
              <div className="col-md-6">
                  Rin 19
                </div>
                <div className="col-md-6" align="right">
                  <h5>POR COTIZAR</h5>
                  <button className={`btn btn-success ` + (button_top === 3 ? 'active' : '')} onClick={() => setButton_top(3)}>SELECCIONAR</button>
                </div>
            </div>    

            <h5 style={{color: 'rgb(179,226,1)'}}>AMABLE</h5>
            <div className="row">
              <div className="btn-group" style={{width:'90%', marginLeft:'auto', marginRight:'auto', borderRadius:'10px'}}>
                <button className={button1?'active':''} style={{width:'33.33%'}} onClick={()=>{setButton1(true);setButton2(false);setButton3(false)}}>*17</button>
                <button className={button2?'active':''} style={{width:'33.33%'}} onClick={()=>{setButton1(false);setButton2(true);setButton3(false)}}>*18</button>
                <button className={button3?'active':''} style={{width:'33.33%'}} onClick={()=>{setButton1(false);setButton2(false);setButton3(true)}}>*19</button>
              </div>
            </div>               
         </div>
        </Modal.Body>
      </Modal>
      
      <Modal show={iceDeviceShow} onHide={()=> setIceDeviceShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Líquido Refrigerante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-6" style={{verticalAlign:'center'}}>
                  <div className="row">
                    <div className="col-md-2 circle_icon">
                      <FontAwesomeIcon icon={faClock} style={{color:'rgb(179,226,1)', fontSize:'35px'}}/>
                    </div>
                    <div className="col-md-9" style={{fontSize:'14px'}}>
                      Tiempo estimado<br/>
                      <span style={{fontSize:'12px', fontFamily:'serif'}}>45 min</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" align="right">
                  <div className="row">
                    <div className="col-md-5 circle_icon" align="right">
                      <FontAwesomeIcon icon={faStickyNote} style={{color:'rgb(179,226,1)', fontSize:'35px', textAlign:'right' }}/>
                    </div>
                    <div className="col-md-6" style={{fontSize:'14px'}} align="left">
                      Garantía<br/>
                      <span style={{fontSize:'12px', fontFamily:'serif', textAlign:'left'}}>6 mes(es) o 10000 Km</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row m-2 p-2" style={{borderRadius:'10px', border:'2px solid #B3E201'}}>
                  <div className="col-md-6">
                    Cambio de Refrigerante de Motor
                  </div>
                  <div className="col-md-6" align="right">
                    {'S/.'}25
                    <FontAwesomeIcon icon={flag?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                      onClick={
                        ()=>{
                          addCart(25, "Cambio de Refrigerante de Motor", 45);
                          setFlag(!flag);
                        }}
                    />
                  </div>
                        <hr className="mt-2" style={{color:'grey'}}/>
                  <div style={{color:'grey'}} className="ml-3">
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