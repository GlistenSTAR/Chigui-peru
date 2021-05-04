import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import { Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStickyNote, faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ListComponent from '../common/List';
import MileageComponent from '../minicomponents/MileageComponent';
import OilChange from '../minicomponents/OilChange';

export default ({addCart}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeServices, setActiveServices] = useState(false);
  const [mileage, setMileage] = useState(false);
  const [chagneOil, setChangeOil] = useState(false);
  const [highlight, setHightlight] = useState();
  const [scanData, setScanData] = useState([]);
  const [mileageData, setMileageData] = useState([]);
  const [flag, setFlag] = useState(false);

  let temp1, temp2;

  const chevronWidth = 40;
  const { innerWidth: width} = window;

  useEffect(() => {
    axios
      .get("/api/highlights")
      .then(response => setHightlight(response.data));
  }, []);

  if(typeof highlight !== "undefined"){
    highlight.map((highlight)=>{
      if(highlight.serviceName === "scanner"){
        temp1 = highlight;
      }
      if(highlight.serviceName === "mileage"){
        temp2 = highlight;
      }
      return 0;
    });

    if(typeof temp1 !=="undefined" && scanData.length === 0){
      setScanData(temp1);
    }
    if(typeof temp2 !=="undefined" && mileageData.length === 0){
      setMileageData(temp2);
    }
  }  

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
        <div>
          <div align="center" onClick={()=>{ setActiveServices(true); }}>
            <Card>
                <Card.Img variant="top" src={require('../../img/icons/escaner.png')} />
                <Card.Body>
                  <Card.Text>
                    Servicio de escáner
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>

        <div>
          <div align="center" onClick={()=>{setMileage(true);}}>
              <Card align="center">
                  <Card.Img variant="top" src={require('../../img/icons/revision_por_kilometraje.png')}/>
                <Card.Body>
                  <Card.Text>
                    Revisión por Kilometraje
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>

        <div>
          <div align="center" onClick={()=>{setChangeOil(true);}}>
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
      </ItemsCarousel>

      <Modal show={activeServices} onHide={()=> setActiveServices(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Servicio de Escáner</Modal.Title>
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
                  <span style={{fontSize:'12px', fontFamily:'serif'}}>{scanData.time} min</span>
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
          <div className="card">
            <div className="row  m-2">
              <div className="col-8" style={{ marginTop:'auto', marginBottom:'auto'}}>
                <h5 align="left" style={{ textTransform :'uppercase', fontSize:'14px'}}>Servicio de Escaner</h5>
              </div>  
              <div className="col-4" style={{height:'50px'}}>
                <h6 align="center" style={{ background:'rgb(179,226,1)',height:'40px', paddingTop:'10px', borderRadius:'20px'}}>
                  <span>{'S/.'}{scanData.price}</span>
                  <FontAwesomeIcon icon={flag?faCheckCircle:faPlusCircle} className="ml-3" color='green' 
                    onClick={
                      ()=>{
                        setFlag(!flag);
                        addCart(scanData.price, "Servicio de Escaner", scanData.time);
                        // if(this.state[item.subname]!==1){
                        //   this.setState({[item.subname] : 1})
                        // } else{
                        //   this.setState({[item.subname] : 0})
                        // }
                      }}
                  />
                </h6>
              </div>
              <hr style={{borderColor:'grey'}}/>
            </div>
            <Card.Body>
              <Card.Text style={{marginTop:'-15px'}}>
                <span style={{fontStyle:'italic', fontSize:'12px', color:'rgb(179,226,1)'}}>Síntomas relacionados a este diagnóstico:</span>
              </Card.Text>
              <ListComponent data={typeof scanData.data!=="undefined"?scanData.data[0].detail:null}/>
            </Card.Body>
          </div>
        </Modal.Body>
      </Modal>

      <MileageComponent 
        data={mileageData} 
        show={mileage} 
        hide={()=> setMileage(false)} 
        onClick={(price, name, time)=>addCart(price, name, time)}
      />

      <OilChange
        show={chagneOil} 
        hide={()=> setChangeOil(false)} 
        onClick={(price, name, time)=>{
          addCart(price, name, time);
        }}
      />
    </div>
  );
};