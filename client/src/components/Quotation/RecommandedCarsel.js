import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
  const { innerWidth: width} = window;
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
        <div >
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
          <div align="center">
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
        <div align="center">
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
    </div>
  );
};