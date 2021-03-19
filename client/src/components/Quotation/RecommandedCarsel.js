import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const { innerWidth: width} = window;
  return (
    <div style={{ padding: `0 20px`,paddingTop:'13px', paddingBottom:'13px', marginLeft:'-15px', marginRight:'-15px',  backgroundColor:'rgb(243, 243, 243)', borderRadius:'10px' }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={width<968?3:6}
        gutter={20}
        leftChevron={<button className="btn btn-sm btn-outline-success">{'<'}</button>}
        rightChevron={<button className="btn btn-sm btn-outline-success">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <div align="center">
              <Card>
              <Card.Img variant="top" src={require('../../img/icons/cambio_bateria.png')} />
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
                <Card.Text>
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