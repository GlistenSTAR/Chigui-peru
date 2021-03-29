import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const { innerWidth: width} = window;
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
          <div align="center">
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
      </ItemsCarousel>
    </div>
  );
};