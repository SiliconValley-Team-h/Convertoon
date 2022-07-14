import { React, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import State from '../components/common/State';
import SaveBtn from '../components/save/SaveBtn';
import ZoomBtn from '../components/save/ZoomBtn';

import styles from './Save.module.css';
function Save() {
  const location = useLocation();
  const srcImg = location.state.srcImg;
  const imgId = location.state.imgId;

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>번역본</p>
        <SaveBtn></SaveBtn>
      </State>
      <div className={styles.container}>
        <section className={styles.viewBox}>
          <ZoomBtn alt="원본 이미지" srcImg={srcImg} />
        </section>
        <section className={styles.viewBox}>
          <ZoomBtn alt="번역된 이미지" />
        </section>
      </div>
    </Fragment>
  );
}

export default Save;
