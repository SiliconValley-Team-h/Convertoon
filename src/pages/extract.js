import { Fragment } from 'react';
import { useState } from 'react';
import Header from '../components/common/Header';
import State from '../components/common/State';
import InputImg from '../components/extract/InputImg';
import TextView from '../components/extract/TextView';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); /* 선택한 이미지 파일 */
  return (
    <Fragment>
      <Header />
      <State />
      <main>
        <div className={styles.container}>
          <div className={styles.viewBox}>
            <div>
              <InputImg />
              <button className={styles.uploadBtn}>Upload</button>
            </div>
          </div>
          <div className={styles.viewBox}>
            <div>
              <TextView />
              <button className={styles.extractBtn}>추출</button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Extract;
