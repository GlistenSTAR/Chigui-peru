import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button className="btn btn-succes">{'<'}</button>}
        rightChevron={<button className="btn btn-succes">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ background: '#EEE' }}>First card</div>
        <div style={{ background: '#EEE' }}>Second card</div>
        <div style={{ background: '#EEE' }}>Third card</div>
        <div style={{ background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
};