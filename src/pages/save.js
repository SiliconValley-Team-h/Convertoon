import { React, Fragment } from 'react';
import Header from '../components/common/Header';
import State from '../components/common/State';
import Img from '../components/save/Img';
import SaveBtn from '../components/save/SaveBtn';
import ZoomBtn from '../components/save/ZoomBtn';

import styles from './Save.module.css';

function Save() {
  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>번역본</p>
        <SaveBtn></SaveBtn>
      </State>
      <div className={styles.container}>
        <section className={styles.viewBox}>
          <ZoomBtn />
          <Img alt="원본 이미지"></Img>
        </section>
        <section className={styles.viewBox}>
          <ZoomBtn />
          <Img alt="수정 이미지"></Img>
        </section>
      </div>
    </Fragment>
  );
}

export default Save;
