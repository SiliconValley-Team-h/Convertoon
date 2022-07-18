import { React, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import State from '../components/common/State';
import SaveBtn from '../components/save/SaveBtn';
import ZoomBtn from '../components/save/ZoomBtn';

import styles from './Save.module.css';
function Save() {
  const location = useLocation();
  const imgId = location.state.imgId;
  const srcImg = location.state.srcImg;
  const resultImg = location.state.resultImg;

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>번역본</p>
        <SaveBtn img={`http://127.0.0.1:8000${resultImg}`}/>
      </State>
      <div className={styles.container}>
        <section className={styles.viewBox}>
          <ZoomBtn alt="원본 이미지" img={srcImg} />
        </section>
        <section className={styles.viewBox}>
          <ZoomBtn alt="번역된 이미지" img={`http://127.0.0.1:8000${resultImg}`} />
        </section>
      </div>
    </Fragment>
  );
}

export default Save;
