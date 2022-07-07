import { useState } from 'react';
import Header from '../components/common/Header';
import State from '../components/common/State';
import InputImg from '../components/extract/InputImg';
import TextView from '../components/extract/TextView';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); /* 선택한 이미지 파일 */
  return (
    <div>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
      </State>
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
              <button className={styles.extractBtn}>Upload</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Extract;
