import { useState, Fragment } from 'react';
import zoomin from './zoomin.png';
import zoomout from './zoomout.png';
import styles from './ZoomBtn.module.css';

import toon1 from '../../img/toon1.jpg'; /*테스트용 이미지*/

function ZoomBtn(props) {
  const [ratio, setRatio] = useState(1);

  const zoomIn = () => {
    setRatio(ratio => ratio + 0.25);
  };

  const zoomOut = () => {
    setRatio(ratio >= 1.25 ? ratio - 0.25 : 1.0);
  };

  return (
    <Fragment>
      <section className={styles.previewFrame}>
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
      <section className={styles.zoomBtnFrame}>
        <img className={styles.zoominBtn} src={zoomin} alt="확대" onClick={zoomIn}></img>
        <img className={styles.zoomoutBtn} src={zoomout} alt="축소" onClick={zoomOut}></img>
      </section>
    </Fragment>
  );
}

export default ZoomBtn;
