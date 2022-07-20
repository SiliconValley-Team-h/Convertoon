import { Fragment, React } from 'react';

import Header from '../components/common/Header';
import SaveBtn from '../components/save/SaveBtn';
import State from '../components/common/State';
import ZoomBtn from '../components/save/ZoomBtn';
import styles from './Save.module.css';
import { useLocation } from 'react-router-dom';

function Save() {
  const location = useLocation();
  const { srcImg, resultImg } = location.state; // 원본 이미지, 번역 이미지

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>번역본</p>
        <SaveBtn img={`http://convertoon.shop${resultImg}`} />
      </State>
      <div className={styles.imgFrames}>
        <section className={styles.imgFrame}>
          <ZoomBtn alt="원본 이미지" img={srcImg} />
        </section>
        <section className={styles.imgFrame}>
          <ZoomBtn alt="번역된 이미지" img={`http://convertoon.shop${resultImg}`} />
        </section>
      </div>
    </Fragment>
  );
}

export default Save;
