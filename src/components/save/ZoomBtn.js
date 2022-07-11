import React, { useState, Fragment } from 'react';
import zoomin from './zoomin.png';
import zoomout from './zoomout.png';

import toon1 from '../../img/toon1.jpg'; /*테스트용 이미지*/

function ZoomBtn(props) {
  const [ratio, setRatio] = useState(1);
  function zoomIn() {
    setRatio(ratio => ratio + 0.25);
  }

  function zoomOut() {
    setRatio(ratio >= 1.25 ? ratio - 0.25 : 1.0);
  }

  return (
    <Fragment>
      <section
        style={{
          color: 'black',
          backgroundColor: '#A5A5A5',
          border: 0,
          width: '70px',
          borderRadius: '40px',
          textAlign: 'center',
          paddingTop: '5px',
        }}
      >
        <img src={zoomin} alt="확대" style={{ width: '20px', height: '20px' }} onClick={zoomIn}></img>
        <img
          src={zoomout}
          alt="축소"
          style={{ marginLeft: '5px', width: '20px', height: '20px' }}
          onClick={zoomOut}
        ></img>
      </section>
      <section style={{ height: '500px', border: '1px solid black', overflow: 'scroll' }}>
        <img
          src={toon1}
          alt={props.alt}
          style={{
            position: 'relative',
            width: `${100 * ratio}%`,
            transform: `scale(${ratio})`,
            transformOrigin: 'left top',
          }}
        />
      </section>
    </Fragment>
  );
}

export default ZoomBtn;
