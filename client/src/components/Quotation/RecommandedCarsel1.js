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
              <Card.Img variant="top" src={require('../../img/icons/cambio_de_aceite.png')} />
              <Card.Body>
                <Card.Text>
                  Cambio de aceite
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
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
        <div>
          <div align="center">
            <Card>
              <Card.Img variant="top" src={require('../../img/icons/liquido_frenos.png')} style={{width:'58px', height:'50px'}}/>
              <Card.Body>
                <Card.Text>
                  Liquido de frenos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div>
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