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
        style={{ position: 'absolute', height: '91vh', width: '100%', border: '1px solid black', overflow: 'scroll' }}
      >
        <img
          src={props.img}
          alt={props.alt}
          style={{
            width: `${65 * ratio}%`,
            transform: `scale(${ratio})`,
            transformOrigin: 'left top',
          }}
        />
      </section>
      <section
        style={{
          color: 'black',
          backgroundColor: 'rgba( 165, 165, 165, 0.7 )',
          border: 0,
          width: '70px',
          height: '25px',
          borderRadius: '40px',
          textAlign: 'center',
          paddingTop: '5px',
          position: 'absolute',
          margin: '15px 30px',
          cursor: 'pointer',
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
    </Fragment>
  );
}

export default ZoomBtn;
