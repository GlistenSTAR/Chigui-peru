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
              <Card.Img variant="top" src={require('../../img/icons/revission de bateria.png')} />
              <Card.Body>
                <Card.Text>
                  Revision de bateria
                </Card.Text>
              </Card.Body>
              </Card>
            </div>
        </div>
        <div>
          <div align="center">
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
    </div>
  );
};