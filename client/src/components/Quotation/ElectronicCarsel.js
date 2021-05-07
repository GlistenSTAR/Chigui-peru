import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [electronicData, setElectronicData] = useState([]);
  const chevronWidth = 40;
  const { innerWidth: width} = window;

  useEffect(() => {
    axios
      .get("/api/highlights")
      .then(response => setElectronicData(response.data));
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
        <div>
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
        <div>
          <div align="center">
              <Card align="center">
                  <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')}/>
                <Card.Body>
                  <Card.Text style={{marginTop:'auto',marginBottom:'auto'}} className="oneRow">
                  Solo Bateria
                  </Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
        <div>
          <div align="center">
            <Card>
                <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
                <Card.Body>
                  <Card.Text className="threeRow">
                  Carga de Bateria con Vehiculo
                  </Card.Text>
                </Card.Body>
                </Card>
            </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};